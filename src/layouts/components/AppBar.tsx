import {
  Container,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { UserMenu } from "./UserMenu";

export const AppBar = ({ open, toggleDrawer }: AppBarProps) => {
  const navigate = useNavigate();

  return (
    <MuiAppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: "white",
        ...(open && {
          width: `calc(100% - 350px)`,
          marginLeft: `350px`,
        }),
      }}
    >
      <Container maxWidth={false}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2, color: "common.black" }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="/logo.svg"
            width="54px"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <UserMenu />
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

type AppBarProps = {
  open?: boolean;
  toggleDrawer?: () => void;
};
