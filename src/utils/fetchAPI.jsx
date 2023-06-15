import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

const options = {
  params: {
    maxResults: 15,
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RapidAPI_Key,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
