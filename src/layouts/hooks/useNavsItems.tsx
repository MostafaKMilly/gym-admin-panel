import { ButtonBaseProps } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const useNavsItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navs: NavItem[] = [
    {
      label: "Clients",
      icon: <GroupsIcon sx={{ color: "common.black" }} />,
      buttonProps: {
        onClick: () => {
          navigate("clients");
        },
        active: pathname === "clients",
      },
    },
    {
      label: "Classes",
      icon: <FitnessCenterIcon sx={{ color: "common.black" }} />,
      buttonProps: {
        onClick: () => {
          navigate("classes");
        },
        active: pathname === "classes",
      },
    },
  ];
  return navs;
};

type NavItem = {
  label: string;
  icon?: React.ReactElement;
  buttonProps?: { active: boolean; onClick?: () => void };
};
