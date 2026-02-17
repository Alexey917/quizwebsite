import { client } from '@/api';

export interface IQuiz {
  background_image_text: string;
  title: string;
  detail_image: string;
  description: string[];
  is_popular: boolean;
  preview_image: string;
  preview_text: string;
}

interface IQuizzesApi {
  numericQuiz: string;
}

export const quizApi = async ({ numericQuiz }: IQuizzesApi) => {
  const response = await client.get(`/api/categories/${numericQuiz}/quizzes`);
  return response.data;
};

export const quizPopularApi = async ({ numericQuiz }: IQuizzesApi) => {
  const response = await client.get(`/api/quizzes/${numericQuiz}`);
  return response.data;
};
