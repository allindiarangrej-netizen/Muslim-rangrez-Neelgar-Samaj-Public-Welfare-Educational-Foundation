export interface AdminImage {
  name: string;
  url: string;
  created_at: string;
  size: number;
}

export interface User {
  id: string;
  email?: string;
}
