import { client } from '../../../api/client';

export interface IPopularQuizzes {
  id: number;
  title: string;
  preview_text?: string;
  preview_image: string;
  detail_image: string;
  description?: string;
  background_image_text?: string;
  is_popular: boolean;
}

export const popularApi = async (limit: number, page: number) => {
  const response = await client.get('/api/quizzes', {
    params: {
      limit: limit,
      page: page,
      is_popular: 1,
    },
  });
  return response.data;
};
