import { AxiosResponse } from "axios";
import { Posts } from "../../@types/Posts";
import api from "../config.axios";

// Get all posts
export const getPosts = async () => {
  const response: AxiosResponse<Posts[]> = await api.get("/posts");
  return response.data;
};

//save a new post
export const savePost = async (post: Posts) => {
  const response: AxiosResponse<Posts> = await api.post("/posts", post);
  return response.data;
};
