import { client } from './client';

export interface IRates {
  title: string;
  subtitle: string;
  preview_description: string;
  old_price: number | null;
  price: number;
  is_new: boolean;
  is_authorial: boolean;
  image: string;
}

export const RatesApi = async () => {
  const response = await client.get('/api/tariffs');
  return response.data;
};
