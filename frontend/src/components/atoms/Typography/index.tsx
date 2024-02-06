import React from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";
interface MuiTypographyProps extends TypographyProps {}
const Typography = ({ ...props }: MuiTypographyProps) => {
  return <MuiTypography {...props}>{props.children}</MuiTypography>;
};

export default Typography;
