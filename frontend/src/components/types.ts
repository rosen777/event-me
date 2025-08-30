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

export interface Modal {
  id: string;
  open: boolean;
  showModal: () => void;  
  close: () => void;
}