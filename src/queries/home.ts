import apiService from '../utils/apiService';

export const fetchList = async (type: string) => {
  const {data} = await apiService.get(`/${type}`);
  return data;
};
