import { AxiosResponse } from "axios";
import { Post } from "../../@types/Posts";
import api from "../config.axios";

export const getPosts = async () => {
  const response: AxiosResponse<Post[]> = await api.get("/posts");
  return response.data;
};

export const savePost = async (post: Post) => {
  const response: AxiosResponse<Post> = await api.post("/posts", post);
  return response.data;
};

export const deletePost = async (id: number) => {
  await api.delete(`/posts/${id}`);
};

export const updatePost = async (post: Post) => {
  const response: AxiosResponse<Post> = await api.put(
    `/posts/${post.id}`,
    post
  );
  return response.data;
};

export const getPostById = async (id: number) => {
  const response: AxiosResponse<Post> = await api.get(`/posts/${id}`);
  return response.data;
};
