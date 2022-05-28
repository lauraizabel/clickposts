import { AxiosResponse } from "axios";
import { User } from "../../@types/User";
import api from "../config.axios";

export const getUsers = async () => {
  const response: AxiosResponse<User[]> = await api.get("/users");
  return response.data;
};

export const getUserById = async (id: number) => {
  const response: AxiosResponse<User> = await api.get(`/users/${id}`);
  return response.data;
};
