import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { indigo } from "@mui/material/colors";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[700]),
  backgroundColor: indigo[700],
  fontWeight: "medium",
  fontSize: "16px",

  "&:hover": {
    backgroundColor: indigo[900],
  },
}));

export default function CustomizedButton({ children, sx, type }) {
  return (
    <ColorButton type={type} variant="contained" sx={sx}>
      {children}
    </ColorButton>
  );
}
