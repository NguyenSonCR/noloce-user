import axiosJWT from '~/api/setAxios';

const setAuthToken = (token) => {
    if (token) {
        axiosJWT.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosJWT.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
