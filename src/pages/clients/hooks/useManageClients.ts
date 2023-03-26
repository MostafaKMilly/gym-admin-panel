import React from "react";
import { useDeleteClient } from "./useDeleteClient";
import { Client } from "./useClients";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useClientsDialog } from "./useClientsDialog";

export const useManageClients = () => {
  const { closeDialog, isDialogOpen, openDialog } = useClientsDialog();
  const [selectedClients, setSelectedClients] = React.useState<Client[]>([]);
  const { mutateAsync: deleteClient } = useDeleteClient();
  const client = useQueryClient();

  const handleSelectionClients = (clients: Client[]) => {
    setSelectedClients(clients);
  };

  const handleDeleteClients = () => {
    const promises: Promise<any>[] = [];
    selectedClients.forEach((client) => {
      const mutation = deleteClient(client.id);
      promises.push(mutation);
    });
    Promise.all(promises).then(() => {
      toast("Delete client successful!", {
        type: "success",
        position: toast.POSITION.TOP_CENTER,
      });
      closeDialog();
      setSelectedClients([]);
      client.invalidateQueries(["ClientsQuery"]);
    });
  };

  return {
    selectedClients,
    handleSelectionClients,
    handleDeleteClients,
    isDialogOpen,
    closeDialog,
    openDialog,
  };
};
