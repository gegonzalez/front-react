import axiosInstance from './axiosInstance';

export const searchProducts = filterText => {
  axiosInstance
    .get(`search?filter=${filterText}`)
    .then(result => {
      return result.data;
    })
    .catch(error => {
      console.log(`😱 Axios request failed: ${error}`);
      return;
    });
};
