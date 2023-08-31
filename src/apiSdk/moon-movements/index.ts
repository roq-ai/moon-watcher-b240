import axios from 'axios';
import queryString from 'query-string';
import { MoonMovementInterface, MoonMovementGetQueryInterface } from 'interfaces/moon-movement';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMoonMovements = async (
  query?: MoonMovementGetQueryInterface,
): Promise<PaginatedInterface<MoonMovementInterface>> => {
  const response = await axios.get('/api/moon-movements', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMoonMovement = async (moonMovement: MoonMovementInterface) => {
  const response = await axios.post('/api/moon-movements', moonMovement);
  return response.data;
};

export const updateMoonMovementById = async (id: string, moonMovement: MoonMovementInterface) => {
  const response = await axios.put(`/api/moon-movements/${id}`, moonMovement);
  return response.data;
};

export const getMoonMovementById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/moon-movements/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMoonMovementById = async (id: string) => {
  const response = await axios.delete(`/api/moon-movements/${id}`);
  return response.data;
};
