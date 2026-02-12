import { client } from '../../../api/client';

export interface IQuizzes {
  title: string;
  preview_text: string;
  preview_image: string;
}

interface IQuizzesApi {
  numericId: string;
}

export const quizzesApi = async ({ numericId }: IQuizzesApi) => {
  const response = await client.get(`/api/categories/${numericId}/quizzes`);
  return response.data;
};
