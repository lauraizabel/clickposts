import { AxiosResponse } from "axios";
import { Posts } from "../../@types/Posts";
import api from "../config.axios";

// Get all posts
export const getPosts = async () => {
  const response: AxiosResponse<Posts[]> = await api.get("/posts");
  return response.data;
};
