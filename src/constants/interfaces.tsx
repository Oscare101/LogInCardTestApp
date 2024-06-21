export interface Theme {
  value: 'system' | 'dark' | 'light';
}

export interface ThemeColor {
  value: 'dark' | 'light';
}

export interface IconName {
  value: 'password' | 'email' | 'eye' | 'eye-closed' | 'home' | 'profile';
}

export interface ImageData {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface UserData {
  name: string;
  imageUrl: string;
  email: string;
}
