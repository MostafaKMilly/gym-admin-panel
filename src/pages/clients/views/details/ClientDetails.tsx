import { Box, IconButton, Paper, Typography } from "@mui/material";
import { loader } from "./utils/loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useClientData } from "./hooks";
import { useClientsDialog, useDeleteClient, useEditClient } from "../../hooks";
import { GenericDialog } from "@/shared/components";
import { ClientForm, EditClientDialog } from "../../components";
import { Client } from "./hooks/useClientData";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const ClientDetails = () => {
  const navigate = useNavigate();
  const { mutate: editClient } = useEditClient();
  const { mutate: deleteClient } = useDeleteClient();
  const { closeDialog, isDialogOpen, openDialog } = useClientsDialog();
  const clientData = useClientData();
  const client = useQueryClient();

  const navigateBack = () => navigate(-1);

  const handleEditClient = (data: Client) => {
    editClient(data, {
      onSuccess: () => {
        client.invalidateQueries({
          queryKey: ["ClientsQuery"],
        });
        closeDialog();
      },
    });
  };

  const handleDeleteClient = () => {
    deleteClient(clientData.id, {
      onSuccess: () => {
        navigateBack();
        client.invalidateQueries({ queryKey: ["ClientsQuery"] });
        toast("Delete client successful!", {
          type: "success",
          position: toast.POSITION.TOP_CENTER,
        });
      },
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#e8ddff",
        color: "#77366b",
        borderRadius: "16px",
        width: "100%",
        p: 4,
      }}
    >
      <Box display="flex" columnGap={2} alignItems="center">
        <IconButton onClick={navigateBack}>
          <ArrowBackIcon sx={{ color: "common.black" }} />
        </IconButton>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ color: "common.black", flexGrow: 1 }}
        >
          {clientData.full_name}
        </Typography>
        <Box display="flex" columnGap={1} alignItems="center">
          <IconButton onClick={() => openDialog("edit")}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => openDialog("delete")}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
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
        onSubmit={handleDeleteClient}
      >
        <Typography variant="body1" sx={{ color: "common.black" }}>
          Are you sure to delete {clientData.full_name} clients ?
        </Typography>
      </GenericDialog>
      <EditClientDialog open={isDialogOpen("edit")} onClose={closeDialog}>
        <ClientForm client={clientData} onSubmitForm={handleEditClient} />
      </EditClientDialog>
    </Paper>
  );
};

ClientDetails.loader = loader;
