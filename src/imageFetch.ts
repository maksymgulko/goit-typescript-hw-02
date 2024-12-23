import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const key = "E86BDqONajg5l2qXSOqpKkrTxA23cg0_ZFHQKuQ26MY";

export const fetchArticlesWithTopic = async (
  topic: string,
  nextPage: number = 1
): Promise<Photo[]> => {
  const response: AxiosResponse<UnsplashResponse> = await axios.get(
    `/search/photos?page=${nextPage}&query=${topic}&client_id=${key}`
  );

  return response.data.results;
};
