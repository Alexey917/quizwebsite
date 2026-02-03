import { client } from '../../../api/client';

export interface IPopularQuizzes {
  title: string;
  description: string;
  img: string;
  link: string;
}

export const popularApi = async (): Promise<IPopularQuizzes[]> => {
  const response = await client.get('/popularQuizzes');
  return response.data;
};
