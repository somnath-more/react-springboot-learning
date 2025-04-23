// ModalContent.jsx
import React from "react";
import { Box, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import Button from "../../atoms/button";
import { PayButtonContainer, StoreDataProps } from "../Dashboard";
import styled from "@emotion/styled";

const BoxContainer = styled(Box)({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'pink',
});
interface ModelProps {
    watchlistData:StoreDataProps[];
    handleClose:()=>void;
}
const ModalContent = ({ watchlistData, handleClose }:ModelProps) => (
  <BoxContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{"ID"}</TableCell>
          <TableCell>{"Name"}</TableCell>
          <TableCell>{"Manufacturer"}</TableCell>
          <TableCell>{"Price"}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {watchlistData.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.manufacturer}</TableCell>
            <TableCell>{data.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <PayButtonContainer>
      <Button variant="contained" style={{ background: "green" }} onClick={() => alert("Buyed Successfully")}>
        {"PAY"}
      </Button>
      <Button variant="contained" style={{ background: "green" }} onClick={handleClose}>
        {"CANCEL"}
      </Button>
    </PayButtonContainer>
  </BoxContainer>
);

export default ModalContent;