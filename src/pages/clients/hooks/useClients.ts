import { useLoaderData } from "react-router-dom";

export const useClients = () => {
  const data = useLoaderData() as { clients: Client[] };
  return data.clients;
};

export type Client = {
  createdAt: string;
  full_name: string;
  address: string;
  avatar: string;
  subscription_plan: string;
  mobile_number: string;
  id: string;
};
