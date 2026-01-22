/**
 * Função utilitária para chamar a Edge Function do Supabase
 * que retorna os dados da foto para compartilhamento
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yulxxamlfxujclnzzcjb.supabase.co';

export interface PhotoShareData {
  photo: {
    id: string;
    image_url: string;
    score?: number;
    created_at?: string;
    users?: {
      username?: string;
      avatar_url?: string;
    } | null;
  };
  storeLinks: {
    ios: string;
    android: string;
  };
}

export interface PhotoShareError {
  error: string;
  message?: string;
}

/**
 * Busca os dados da foto via Edge Function do Supabase
 * @param photoId - ID da foto
 * @returns Dados da foto ou erro
 */
export async function getPhotoShare(
  photoId: string
): Promise<PhotoShareData | PhotoShareError> {
  try {
    if (!photoId || typeof photoId !== 'string' || photoId.trim() === '') {
      return {
        error: 'INVALID_PHOTO_ID',
        message: 'ID da foto inválido',
      };
    }

    // Garante que o photoId está limpo e válido
    const cleanPhotoId = photoId.trim();
    const url = `${SUPABASE_URL}/functions/v1/get-photo-share?photoId=${encodeURIComponent(cleanPhotoId)}`;
    
    // Log da URL para debug (remover em produção se necessário)
    console.log('Chamando Edge Function:');
    console.log('  - photoId original:', photoId);
    console.log('  - photoId limpo:', cleanPhotoId);
    console.log('  - URL completa:', url);
    
    // Headers para Edge Function do Supabase
    // Se precisar de autenticação, adicione o anon key aqui
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    // Se houver anon key configurada, adicione ao header
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (anonKey) {
      headers['Authorization'] = `Bearer ${anonKey}`;
      console.log('Usando autenticação com anon key');
    } else {
      console.log('Sem autenticação (anon key não configurada)');
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
      // Cache por 5 minutos para reduzir chamadas à API
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      let errorMessage = response.statusText;
      
      // Tenta ler a mensagem de erro da resposta
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
        console.error('Erro da Edge Function:', errorData);
      } catch (e) {
        // Se não conseguir parsear JSON, usa o statusText
        console.error('Erro ao parsear resposta de erro:', e);
        console.error('Status:', response.status, response.statusText);
      }
      
      if (response.status === 404) {
        return {
          error: 'PHOTO_NOT_FOUND',
          message: 'Foto não encontrada',
        };
      }
      
      if (response.status >= 500) {
        return {
          error: 'SERVER_ERROR',
          message: `Erro no servidor (${response.status}): ${errorMessage}`,
        };
      }

      return {
        error: 'FETCH_ERROR',
        message: `Erro ao buscar foto (${response.status}): ${errorMessage}`,
      };
    }

    const data = await response.json();
    
    // Log para debug (remover em produção se necessário)
    console.log('Resposta da Edge Function:', JSON.stringify(data, null, 2));
    
    // Validação mais flexível da estrutura da resposta
    // A Edge Function pode retornar os dados em diferentes formatos
    if (!data) {
      return {
        error: 'INVALID_RESPONSE',
        message: 'Resposta vazia da API',
      };
    }

    // A Edge Function retorna: { photo: {...}, storeLinks: { ios: "...", android: "..." } }
    // Onde photo tem: id, image_url, score, created_at, users: { username, avatar_url }
    
    if (!data.photo) {
      return {
        error: 'INVALID_RESPONSE',
        message: `Resposta inválida da API. Estrutura recebida: ${JSON.stringify(Object.keys(data))}`,
      };
    }

    // Validação: precisa ter pelo menos image_url
    if (!data.photo.image_url) {
      return {
        error: 'INVALID_RESPONSE',
        message: 'Resposta da API não contém image_url na foto',
      };
    }

    // Normaliza os dados para o formato esperado
    const photoData: PhotoShareData = {
      photo: {
        id: data.photo.id || photoId,
        image_url: data.photo.image_url,
        score: data.photo.score,
        created_at: data.photo.created_at,
        users: data.photo.users || null,
      },
      storeLinks: {
        ios: data.storeLinks?.ios || '',
        android: data.storeLinks?.android || '',
      },
    };

    return photoData;
  } catch (error) {
    console.error('Erro ao buscar foto:', error);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        error: 'NETWORK_ERROR',
        message: 'Erro de conexão. Verifique sua internet.',
      };
    }

    return {
      error: 'UNKNOWN_ERROR',
      message: 'Erro inesperado ao buscar foto',
    };
  }
}
