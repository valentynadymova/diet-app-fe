import axios from 'axios';

axios.defaults.baseURL = 'https://diet-app-be.onrender.com/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const getPublicProducts = async data => {
  const products = await axios({
    method: 'post',
    url: `products/public/${data.bloodType}`,
    data,
  });
  return products;
};

export const getPrivateProducts = async data => {
  const products = await axios({
    method: 'post',
    url: `products/private/${data.bloodType}`,
    data,
  });
  return products;
};
