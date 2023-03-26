import { Box, Button, Typography } from "@mui/material";
import { Hero } from "./components";
import { loader } from "./utils/loader";
import { ClientsList } from "./components/ClientsList";
import { useManageClients } from "./hooks";
import { GenericDialog } from "@/shared/components";
import React from "react";

export const Clients = () => {
  const {
    selectedClients,
    handleSelectionClients,
    closeDialog,
    isDialogOpen,
    openDialog,
    handleDeleteClients,
  } = useManageClients();

  return (
    <Box>
      <Hero />
      <Box my={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2" sx={{ color: "common.black" }}>
            Clients
          </Typography>
          <Box display="flex" columnGap={2}>
            <Button>Add</Button>
            <Button
              variant="outlined"
              color="secondary"
              disabled={selectedClients.length !== 1}
            >
              Edit
            </Button>
            <Button
              color="error"
              disabled={selectedClients.length === 0}
              onClick={() => openDialog("delete")}
            >
              Delete
            </Button>
          </Box>
        </Box>
        <ClientsList
          selectedClients={selectedClients}
          handleSelectedClient={handleSelectionClients}
        />
      </Box>
      <GenericDialog
        open={isDialogOpen("delete")}
        onClose={closeDialog}
        dialog={{
          title: "Confirm Delete",
          submitButton: {
            color: "error",
            label: "Delete",
          },
        }}
        onSubmit={handleDeleteClients}
      >
        <Typography variant="body1" sx={{ color: "common.black" }}>
          Are you sure to delete {selectedClients.length} clients ?
        </Typography>
      </GenericDialog>
    </Box>
  );
};

Clients.loader = loader;
