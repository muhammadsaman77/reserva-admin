export type Hotel = {
  id: number;
  name: string;
  description: string;
  owner_id: string;
  price: number;
  rooms: Room[];
};

type Room = {
  id: number;
  type: string;
};
