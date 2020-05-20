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
