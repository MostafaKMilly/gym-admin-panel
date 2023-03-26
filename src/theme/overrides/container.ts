import { Components, Theme } from "@mui/material";

export const ContainerStylesOverrides: Components<Theme>["MuiContainer"] = {
  styleOverrides: {
    root: {
      paddingLeft: "32px !important",
      paddingRight: "32px !important",
    },
  },
  variants: [
    {
      props: {
        maxWidth: "xl",
      },
      style: {
        maxWidth: "1665px !important",
      },
    },
  ],
};
