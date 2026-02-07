import { client } from '../../../api/client';

export interface IPopularQuizzes {
  title: string;
  preview_text: string;
  preview_image: string;
  detail_image: string;
  description: string;
  background_image_text: string;
}

export const popularApi = async () => {
  const response = await client.get('/api/categories/2/quizzes');
  return response.data;
};
