import axiosInstance from '../lib/axiosInstance';

const user = () => {
  return {
    login: async (body) => {
      try {
        const res = await axiosInstance.post(`/apis/v1/admin/login`, body);

        return res.data.data;
      } catch (err) {
        return err.response;
      }
    },
    logout: async (body) => {
      try {
        const res = await axiosInstance.post(`/apis/v1/admin/logout`, body);

        return res.data;
      } catch (err) {
        return err.response;
      }
    }
  };
};

export default user;
