import { Box, Modal, styled } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import { Stack } from "@mui/system";

interface PopupBoxProps {
  open: boolean;
  name?: string;
  description?: string;
  price?: number;
  handleTextFieldChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose?: () => void;
  handleSubmit?: () => void;
}

const StyledBox = styled(Modal)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "auto",
  backgroundColor: "white",
  border: "1px solid black",
  boxShadow: "20px",
});
const PopupBox = ({
  name,
  price,
  description,
  handleTextFieldChange,
  handleDescriptionChange,
  handlePriceChange,
  open,
  handleClose,
  handleSubmit,
}: PopupBoxProps) => {
  return (
    <StyledBox open={open} onClose={handleClose}>
      <Stack gap={3}>
        <Typography
          children={"Add TODO|Update TODO"}
          variant="h4"
          color={"palegreen"}
        />
        <TextField
          placeholder="Please update or add an name"
          onChange={handleTextFieldChange}
          value={name}
        />
        <TextField
          value={description}
          placeholder="Please update or add an description"
          onChange={handleDescriptionChange}
        />
        <TextField
          value={price}
          placeholder="Please update or add an Price"
          onChange={handlePriceChange}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          children={"Add TODO|Update TODO"}
        />
      </Stack>
    </StyledBox>
  );
};

export default PopupBox;
