export interface Route {
  id?: string;
  icon?: string;
  name?: string;
  children?: Route [];
}

export interface User {
  username?: string;
  avatar?: string;
}

export interface Card {
  id?: string;
  userId?: string;
  title?: string;
  content?: string;
  images?: string[];
  like?: number;
  messages?: number;
}
