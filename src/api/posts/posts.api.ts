import { AxiosResponse } from "axios";
import { Post } from "../../@types/Posts";
import api from "../config.axios";

// Get all posts
export const getPosts = async () => {
  const response: AxiosResponse<Post[]> = await api.get("/posts");
  return response.data;
};

//save a new post
export const savePost = async (post: Post) => {
  const response: AxiosResponse<Post> = await api.post("/posts", post);
  return response.data;
};

//delete a post
export const deletePost = async (id: number) => {
  await api.delete(`/posts/${id}`);
};
