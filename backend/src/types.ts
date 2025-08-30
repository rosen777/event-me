export interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  image_url?: string;
  host_id: number;
  host?: {
    id: number;
    name: string;
    email: string;
  };
  rsvps?: {
    id: number;
    name: string;
    email: string;
  }[];
}

export interface User {
  id: number;
  username: string;
  name: string;
  email?: string;
}

export interface RSVP {
  id: number;
  name: string;
  email: string;
}
