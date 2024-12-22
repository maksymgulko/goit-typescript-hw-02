import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const key = "E86BDqONajg5l2qXSOqpKkrTxA23cg0_ZFHQKuQ26MY";

export const fetchArticlesWithTopic = async (topic, nextPage = 1) => {
  const response = await axios.get(
    `/search/photos?page=${nextPage}&query=${topic}&client_id=${key}`
  );
  return response.data.results;
};
