import { User } from "./User";

export interface Post {
  id?: number;
  userId: number | null;
  title: string;
  body: string;
}

export interface ShowPost {
  id?: number;
  userId: number | null;
  title: string;
  body: string;
  user: User;
}
