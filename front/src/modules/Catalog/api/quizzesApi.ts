import { client } from '../../../api/client';

export interface IQuizzes {
  id: number;
  title: string;
  preview_text: string;
  preview_image: string;
}

interface IQuizzesApi {
  numericId: string;
  page?: number;
  limit?: number;
}

export const quizzesApi = async ({ numericId }: IQuizzesApi) => {
  const response = await client.get(`/api/categories/${numericId}/quizzes`);
  return response.data;
};
