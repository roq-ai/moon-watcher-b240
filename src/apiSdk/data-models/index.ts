import axios from 'axios';
import queryString from 'query-string';
import { DataModelInterface, DataModelGetQueryInterface } from 'interfaces/data-model';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDataModels = async (
  query?: DataModelGetQueryInterface,
): Promise<PaginatedInterface<DataModelInterface>> => {
  const response = await axios.get('/api/data-models', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDataModel = async (dataModel: DataModelInterface) => {
  const response = await axios.post('/api/data-models', dataModel);
  return response.data;
};

export const updateDataModelById = async (id: string, dataModel: DataModelInterface) => {
  const response = await axios.put(`/api/data-models/${id}`, dataModel);
  return response.data;
};

export const getDataModelById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/data-models/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDataModelById = async (id: string) => {
  const response = await axios.delete(`/api/data-models/${id}`);
  return response.data;
};
