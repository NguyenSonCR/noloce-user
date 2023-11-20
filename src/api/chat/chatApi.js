import axiosJWT from '../setAxios';
const chatApi = {
    getChat: (username) => {
        const url = '/chat';
        return axiosJWT.get(url, { params: { username } });
    },
};

export default chatApi;
