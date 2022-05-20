import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3002/`,
});

export const requestData = async (endpoint) => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error) {
    console.error(error)
  }
};