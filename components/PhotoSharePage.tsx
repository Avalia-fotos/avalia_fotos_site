"use client";

import { useEffect, useState } from "react";
import type { PhotoShareData, PhotoShareError } from "@/lib/supabase";

interface PhotoSharePageProps {
  photoId: string;
  photoData: PhotoShareData | PhotoShareError;
}

/**
 * Detecta a plataforma do usuário (Android, iOS ou Desktop)
 */
function detectPlatform(): "android" | "ios" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (/android/.test(userAgent)) {
    return "android";
  }
  
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return "ios";
  }
  
  return "desktop";
}

/**
 * Tenta abrir o app via deep link
 */
function tryDeepLink(photoId: string): void {
  if (typeof window === "undefined") return;
  
  const deepLink = `avaliafotos://avaliafotos.com/photo-detail/${photoId}`;
  
  // Tenta abrir o deep link
  window.location.href = deepLink;
}

export default function PhotoSharePage({ photoId, photoData }: PhotoSharePageProps) {
  const [showWebPage, setShowWebPage] = useState(false);
  const [platform, setPlatform] = useState<"android" | "ios" | "desktop">("desktop");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Se houver erro, mostra a página web imediatamente
    if ("error" in photoData) {
      setShowWebPage(true);
      setPlatform(detectPlatform());
      setIsLoaded(true);
      return;
    }

    // Detecta a plataforma
    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);

    // Tenta abrir o deep link
    tryDeepLink(photoId);

    // Se após 2 segundos o usuário ainda estiver na página,
    // assume que o app não está instalado e mostra a página web
    const timeout = setTimeout(() => {
      setShowWebPage(true);
      setIsLoaded(true);
    }, 2000);

    // Limpa o timeout se o componente for desmontado
    return () => clearTimeout(timeout);
  }, [photoId, photoData]);

  // Se ainda não passou o timeout, mostra loading elegante
  if (!showWebPage && !("error" in photoData)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center animate-fade-in">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-brand-100 border-t-brand-600 mx-auto mb-6"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-brand-600"></div>
            </div>
          </div>
          <p className="text-gray-700 font-medium text-lg">Abrindo no app...</p>
          <p className="text-gray-500 text-sm mt-2">Se o app não abrir, aguarde um momento</p>
        </div>
      </div>
    );
  }

  // Se houver erro, mostra página de erro melhorada
  if ("error" in photoData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        <div className="max-w-md w-full text-center animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-6">
              <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              {photoData.error === "PHOTO_NOT_FOUND"
                ? "Foto não encontrada"
                : "Erro ao carregar foto"}
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {photoData.message || "Ocorreu um erro inesperado."}
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Voltar para o início
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Renderiza a página web com a foto
  const { photo, storeLinks } = photoData;
  const authorName = photo.users?.username || null;
  const authorAvatar = photo.users?.avatar_url || null;
  const photoScore = photo.score;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Foto - Destaque Principal */}
        <div className={`mb-8 sm:mb-12 animate-fade-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-8">
              <div className="w-full h-auto max-w-full">
                <img
                  src={photo.image_url}
                  alt={authorName ? `Foto compartilhada por ${authorName}` : "Foto compartilhada"}
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                  loading="eager"
                  onLoad={() => setIsLoaded(true)}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Informações do Autor e Nota */}
        {(authorName || photoScore !== undefined) && (
          <div className={`mb-8 sm:mb-12 animate-fade-in delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                {/* Avatar */}
                {authorAvatar ? (
                  <div className="flex-shrink-0">
                    <img
                      src={authorAvatar}
                      alt={authorName || "Autor"}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-brand-100 shadow-md"
                    />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center border-4 border-brand-100 shadow-md">
                    <span className="text-white text-2xl sm:text-3xl font-bold">
                      {authorName ? authorName.charAt(0).toUpperCase() : "?"}
                    </span>
                  </div>
                )}
                
                {/* Informações */}
                <div className="flex-1 text-center sm:text-left">
                  {authorName && (
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {authorName}
                    </h2>
                  )}
                  {photoScore !== undefined && photoScore !== null && (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-4 py-2 rounded-full shadow-md">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-bold text-lg">{photoScore.toFixed(1)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Seção de Download */}
        <div className={`animate-fade-in delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Baixe o app AvaliA
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Avalie suas fotos com IA e receba feedback técnico detalhado em segundos
              </p>
            </div>
            
            {/* Botões de Download */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto mb-8">
              {/* Botão Play Store (Android) */}
              {(platform === "android" || platform === "desktop") && storeLinks.android && (
                <a
                  href={storeLinks.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
                >
                  <svg
                    className="w-7 h-7 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Play Store</span>
                </a>
              )}

              {/* Botão App Store (iOS) */}
              {(platform === "ios" || platform === "desktop") && storeLinks.ios && (
                <a
                  href={storeLinks.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
                >
                  <svg
                    className="w-7 h-7 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span>App Store</span>
                </a>
              )}
            </div>

            {/* Link alternativo para abrir no app */}
            <div className="text-center pt-6 border-t border-gray-200">
              <button
                onClick={() => tryDeepLink(photoId)}
                className="text-brand-600 hover:text-brand-700 font-semibold transition-colors duration-200 text-sm sm:text-base inline-flex items-center gap-2 group"
              >
                <span>Ou abra no app se já estiver instalado</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
