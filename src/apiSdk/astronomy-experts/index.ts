import axios from 'axios';
import queryString from 'query-string';
import { AstronomyExpertInterface, AstronomyExpertGetQueryInterface } from 'interfaces/astronomy-expert';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAstronomyExperts = async (
  query?: AstronomyExpertGetQueryInterface,
): Promise<PaginatedInterface<AstronomyExpertInterface>> => {
  const response = await axios.get('/api/astronomy-experts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAstronomyExpert = async (astronomyExpert: AstronomyExpertInterface) => {
  const response = await axios.post('/api/astronomy-experts', astronomyExpert);
  return response.data;
};

export const updateAstronomyExpertById = async (id: string, astronomyExpert: AstronomyExpertInterface) => {
  const response = await axios.put(`/api/astronomy-experts/${id}`, astronomyExpert);
  return response.data;
};

export const getAstronomyExpertById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/astronomy-experts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAstronomyExpertById = async (id: string) => {
  const response = await axios.delete(`/api/astronomy-experts/${id}`);
  return response.data;
};
