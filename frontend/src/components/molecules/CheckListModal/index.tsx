import styled from "@emotion/styled";
import {
  Box,
  Dialog,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { TodoTableProps } from "../../organisms/TodoTable";
const CheckListModalContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: "",
  padding: "20px",
  background: "white",
  border: "2px solid #000",
  boxShadow: "20px",
});
interface CheckListModalProps {
  data?: TodoTableProps[];
  open: boolean;
  handleClose: () => void;
}
const CheckListModal = ({ handleClose, open, data }: CheckListModalProps) => {
  //   const [price, setPrice] = useState(0);
  const totalPrice = data?.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);
  // setPrice(Number(totalPrice));

  return (
    <Modal open={open} onClose={handleClose}>
      <CheckListModalContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{"ID"}</TableCell>
              <TableCell>{"Name"}</TableCell>
              <TableCell>{"Description"}</TableCell>
              <TableCell>{"Price"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.price}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <Typography variant="h4">{"Total Amount:" + totalPrice}</Typography>
        </Table>
      </CheckListModalContainer>
    </Modal>
  );
};

export default CheckListModal;
