import { client } from '../../../api/client';

export interface ICategories {
  id: number;
  title: string;
  preview_text: string;
  preview_image: string;
}

export const categoriesApi = async (page: number, limit: number) => {
  const response = await client.get('/api/categories', {
    params: {
      page: page,
      limit: limit,
    },
  });
  return response.data;
};
