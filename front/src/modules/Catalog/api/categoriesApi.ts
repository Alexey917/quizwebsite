import { client } from '../../../api/client';

export interface ICategories {
  title: string;
  preview_text: string;
  preview_image: string;
}

export const categoriesApi = async () => {
  const response = await client.get('/api/categories');
  return response.data;
};
