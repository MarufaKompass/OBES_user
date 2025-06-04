import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const registerUser = async (userData) => {
  const response = await axios.post('https://obapi.myhealthrow.com/public/api/signup', userData);
  return response.data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const loginUser = async (loginData) => {
 const response = await axios.post('https://api.obesitybes.com/public/api/login', loginData);
  return response.data;
}

