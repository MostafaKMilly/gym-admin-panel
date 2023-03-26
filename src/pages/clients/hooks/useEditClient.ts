import API from "@/api/client";
import { Client } from "./useClients";
import { useMutation } from "@tanstack/react-query";

const editClientMutation = {
  mutationFn: (client: Client) => API.put("clients/" + client.id, client),
};

export const useEditClient = () => {
  const mutation = useMutation(editClientMutation);
  return mutation;
};
