import { Box, Button, Typography } from "@mui/material";
import { Hero } from "./components";
import { loader } from "./utils/loader";
import { ClientsList } from "./components/ClientsList";
import React from "react";
import { Client } from "./hooks/useClients";

export const Clients = () => {
  const [selectedClients, setSelectedClients] = React.useState<Client[]>([]);

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
            <Button color="error" disabled={selectedClients.length === 0}>
              Delete
            </Button>
          </Box>
        </Box>
        <ClientsList
          selectedClients={selectedClients}
          handleSelectedClient={(clients: Client[]) => {
            setSelectedClients(clients);
          }}
        />
      </Box>
    </Box>
  );
};

Clients.loader = loader;
