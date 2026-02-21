import { formDataClient } from '@/api';

export interface IUsualApplication {
  name: string;
  phone: string;
  tariff_id: number;
  quiz_id: string;
  quantity_of_guests: string;
  communication: string;
  login: string;
}

export interface IAuthorialApplication extends IUsualApplication {
  quiz_description: string;
}

export const applicationApi = async (data: FormData) => {
  const response = await formDataClient.post('/api/application', data);
  return response.data;
};
