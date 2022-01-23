import axios from 'axios';

const URL = process.env.REACT_APP_COUNTRY_API_URL;
const version = process.env.REACT_APP_API_VERSION;

export const getCountries = async (query: string) => {
    const apiUrl = `${URL}/${version}/${query}`;
    const { data } = await axios.get(apiUrl);
    console.log(data);
    return data;
};