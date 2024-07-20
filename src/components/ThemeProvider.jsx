import { createTheme } from "@mui/material/styles";

import { indigo } from "@mui/material/colors";

export const customTheme = (input) =>
  createTheme({
    ...input,
    palette: {
      primary: {
        main: indigo[700],
      },
    },
  });
