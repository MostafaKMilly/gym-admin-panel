import {
  Box,
  List,
  ListItem,
  ListItemButton as MUIListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { useNavsItems } from "../hooks";

export const Drawer = ({ toggleDrawer, ...props }: DrawerProps) => {
  const navs = useNavsItems();

  return (
    <MuiDrawer
      variant={"persistent"}
      hideBackdrop
      elevation={0}
      anchor="left"
      sx={{
        width: 350,
        "& .MuiDrawer-paper": {
          width: 350,
          boxSizing: "border-box",
          bgcolor: ({ palette }) => alpha(palette.primary.light, 0.09),
          borderRight: "1px solid white",
        },
      }}
      {...props}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h1" fontWeight={600}>
          My Gym
        </Typography>
      </Toolbar>
      <List sx={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
        {navs.map((nav) => (
          <ListItem key={nav.label}>
            <ListItemButton {...nav.buttonProps} disableRipple>
              <ListItemText>{nav.label}</ListItemText>
              <ListItemIcon>{nav.icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

const ListItemButton = styled(MUIListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active, theme }) => ({
  backgroundColor: active
    ? theme.palette.primary.light
    : alpha(theme.palette.secondary.light, 0.1),
  "&:hover": {
    backgroundColor: active
      ? theme.palette.primary.light
      : alpha(theme.palette.secondary.light, 0.1),
  },
  color: active ? theme.palette.common.white : "inherit",
  borderRadius: 6,
  height: "65px",
}));

export type DrawerProps = MuiDrawerProps & {
  toggleDrawer?: () => void;
};
