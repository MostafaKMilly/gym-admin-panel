import { Components, Theme } from "@mui/material";
import { CssBaselineOverrides } from "./CssBaseLine";
import { MuiFormLableOverrides } from "./FormLabel";
import { ButtonStylesOverrides } from "./Button";
import { MuiFormHelperTextOverrides } from "./FormHelperText";

export const componentOverrides: Components<Theme> = {
  MuiCssBaseline: CssBaselineOverrides,
  MuiFormLabel: MuiFormLableOverrides,
  MuiButton: ButtonStylesOverrides,
  MuiFormHelperText: MuiFormHelperTextOverrides,
};
