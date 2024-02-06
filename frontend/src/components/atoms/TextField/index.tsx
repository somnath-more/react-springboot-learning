import React from "react";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
interface MuiTextFieldProps extends Omit<TextFieldProps, "variant"> {}
const TextField = ({ ...props }: MuiTextFieldProps) => {
  return <MuiTextField {...props}></MuiTextField>;
};

export default TextField;
