import { client } from '../../../api/client';

export interface IReviews {
  author: string;
  company: string;
  review: string;
  rating: number;
}

export const reviewsApi = async () => {
  const response = await client.get('/api/reviews');
  return response.data;
};
