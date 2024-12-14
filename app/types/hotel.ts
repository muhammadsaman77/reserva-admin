export type Hotel = {
  id: number;
  name: string;
  description: string;
  owner_id: string;
  price: number;
  address: string;
  rooms: Room[];
  images: string[];
};
export type Facilities = {
  name: string;
};
type Room = {
  id: number;
  type: string;
};
