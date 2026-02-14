import { client } from '@/api';

interface IQuizzesApi {
  numericId: string;
}

export const quizApi = async ({ numericId }: IQuizzesApi) => {
  const response = await client.get(`/api/quizzes/${numericId}`);
  return response.data;
};
