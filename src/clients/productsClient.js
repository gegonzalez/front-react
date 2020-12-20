import axiosInstance from './axiosInstance';

export const searchProducts = filterText => {
  axiosInstance
    .get(`search?filter=${filterText}`)
    .then(result => result.data)
    .catch(error => {
      console.log(`😱 Axios request failed: ${error}`);
    });
};

export const findProductById = id => {
  axiosInstance
    .get(id)
    .then(result => [result.data])
    .catch(error => {
      console.log(`😱 Axios request failed: ${error}`);
    });
};
