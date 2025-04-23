import React from 'react';
import { TextFieldProps, TextField as MuiTextField } from "@mui/material";
interface MuiTextFieldProps extends Omit<TextFieldProps,"variant">{

}
const TextField:React.FC<MuiTextFieldProps> = (props) => {
  return (
    <MuiTextField {...props} />
  )
}

export default TextField