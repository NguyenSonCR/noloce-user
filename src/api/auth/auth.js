import axiosJWT from '../setAxios';

const authApi = {
    login: (formData) => {
        const url = '/users/login';
        return axiosJWT.post(url, formData);
    },
    register: (formData) => {
        const url = '/users/register';
        return axiosJWT.post(url, formData);
    },
    loadUser: () => {
        const url = '/users';
        return axiosJWT.get(url);
    },
};

export default authApi;
