import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB = process.env.REACT_APP_MVDB_TOKEN;

const headers = {
    Authorization: `Bearer ${TMDB}`,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
