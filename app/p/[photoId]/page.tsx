import { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoSharePage from "@/components/PhotoSharePage";
import { getPhotoShare, type PhotoShareData } from "@/lib/supabase";

interface PageProps {
  params: {
    photoId: string;
  };
}

/**
 * Gera metadados dinâmicos para Open Graph e SEO
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const photoId = resolvedParams.photoId;
  
  // Busca os dados da foto para gerar metadados
  const photoData = await getPhotoShare(photoId);

  // Se houver erro, retorna metadados genéricos
  if ("error" in photoData) {
    return {
      title: "Foto não encontrada | AvaliA",
      description: "A foto que você está procurando não foi encontrada.",
      openGraph: {
        title: "Foto não encontrada | AvaliA",
        description: "A foto que você está procurando não foi encontrada.",
        type: "website",
        url: `https://avaliafotos.com.br/p/${photoId}`,
      },
      twitter: {
        card: "summary",
        title: "Foto não encontrada | AvaliA",
        description: "A foto que você está procurando não foi encontrada.",
      },
    };
  }

  const { photo } = photoData as PhotoShareData;
  const authorName = photo.users?.username;
  const title = authorName 
    ? `Foto compartilhada por ${authorName} | AvaliA`
    : "Foto compartilhada | AvaliA";
  const description = 
    "Veja esta foto compartilhada no AvaliA. Baixe o app para avaliar suas fotos com IA.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://avaliafotos.com.br/p/${photoId}`,
      images: [
        {
          url: photo.image_url,
          width: 1200,
          height: 1200,
          alt: authorName ? `Foto compartilhada por ${authorName}` : "Foto compartilhada",
        },
      ],
      siteName: "AvaliA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [photo.image_url],
    },
    alternates: {
      canonical: `https://avaliafotos.com.br/p/${photoId}`,
    },
  };
}

/**
 * Página de compartilhamento de foto
 * 
 * Esta página:
 * 1. Busca os dados da foto via Edge Function
 * 2. Tenta abrir o app via deep link
 * 3. Se o app não estiver instalado, exibe página web com foto e botões de download
 */
export default async function PhotoSharePageRoute({ params }: PageProps) {
  // Next.js 14+ pode passar params como Promise, então precisamos await
  const resolvedParams = await params;
  const photoId = resolvedParams.photoId;

  // Validação básica do photoId
  if (!photoId || typeof photoId !== "string" || photoId.trim() === "") {
    console.error('PhotoId inválido:', photoId);
    notFound();
  }

  console.log('PhotoSharePageRoute - photoId recebido:', photoId);

  // Busca os dados da foto
  const photoData = await getPhotoShare(photoId);

  // Se a foto não foi encontrada, retorna 404
  if ("error" in photoData && photoData.error === "PHOTO_NOT_FOUND") {
    notFound();
  }

  return <PhotoSharePage photoId={photoId} photoData={photoData} />;
}
