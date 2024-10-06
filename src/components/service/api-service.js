import axios from "axios";

const BASE_URL = "https://youtube-media-downloader.p.rapidapi.com/v2";
const options = {
  headers: {
    "x-rapidapi-key": "7089bb1c23msh398ab8a78c982acp11f34ejsn7d9da82f4ca1",
    "x-rapidapi-host": "youtube-media-downloader.p.rapidapi.com",
  },
  params: {
    videos: "true",
    audios: "true",
    subtitles: "true",
    related: "true",
  },
};

const ApiService = {
  fetching: async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  },
};
export default ApiService;
