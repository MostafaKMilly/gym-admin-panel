import { useEffect, useState } from "react";
import { AppBar } from "./components";
import { loader } from "./utils/loader";
import { Box, Theme, useMediaQuery } from "@mui/material";
import { Drawer } from "./components/Drawer";
import { useLocation, useNavigate } from "react-router-dom";

export const MainLayout = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const [drawer, setDrawer] = useState(matches);
  const { pathname } = useLocation();
  const [, child] = pathname.split("/");
  const navigate = useNavigate();

  useEffect(() => {
    if (!child) {
      navigate("clients");
    }
  }, [child, navigate]);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box display="flex">
      <AppBar open={drawer} toggleDrawer={toggleDrawer} />
      <Drawer open={drawer} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

MainLayout.loader = loader;
