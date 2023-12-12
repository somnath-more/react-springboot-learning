import styled from "@emotion/styled";
import {
  Badge,
  BadgeProps,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import { ECOMMERCE_STORE } from "../../../utils";
import TextField from "../../atoms/TextField";
import { FETCH_DATA, FETCH_WatchList_DATA, POST_DATA } from "../../../services";
import Button from "../../atoms/button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import ModalContent from "../Modal";

const DashboardContainer = styled(Box)({
  height: "800px",
  width: "100%",
  background: "linear-gradient(orange,white,green)",
});
const AddContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  height: "100px",
  width: "90%",
});
const MainContainer = styled(Box)({
  height: "auto",
  width: "90%",
});
const StoreContainer = styled(TableBody)({
  height: "auto",
  width: "90%",
});

export const PayButtonContainer = styled(Box)({
  height: "auto",
  width: "90%",
  display: "flex",
  gap: 20,
  justifyContent: "flex-end",
  margin: "20px",
});

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid green`,
    padding: "0 4px",
  },
}));

const SearchContainer = styled(TextField)({
  height: "auto",
  width: "600px",
  marginLeft: "20px",
  marginTop: "20px",
});

export interface StoreDataProps {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
}

const Dashboard = () => {
  const [productName, setProductName] = useState("");
  const [storeData, setStoreData] = useState<StoreDataProps[]>([]);
  const [read, setRead] = useState(0);
  const [watchlistData, setWatchlistData] = useState<StoreDataProps[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    FETCH_DATA()
      .then((data) => {
        console.log(data);
        setStoreData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleShoppingCart = () => {};

  useEffect(() => {
    FETCH_WatchList_DATA()
      .then((data) => {
        console.log(data);
        setWatchlistData(data);
        setRead(data.length);
        console.log("Data size:", data.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleAddProduct = (addData: StoreDataProps) => {
    const watchlistData = {
      name: addData.name,
      manufacturer: addData.manufacturer,
      price: addData.price,
    };
    POST_DATA(watchlistData)
      .then((data) => {
        setRead(data.id);
        console.log(data.id);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <DashboardContainer>
      <Typography variant="h3" textAlign={"center"}>
        {ECOMMERCE_STORE}
      </Typography>
      {open ? (
        <ModalContent watchlistData={watchlistData} handleClose={handleClose} />
      ) : (
        ""
      )}

      <AddContainer>
        <SearchContainer
          size="small"
          placeholder="Search product name"
          onChange={(e) => setProductName(e.target.value)}
        />

        <IconButton aria-label="cart" onClick={handleShoppingCart}>
          <StyledBadge badgeContent={read} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </AddContainer>
      <MainContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{"ID"}</TableCell>
              <TableCell>{"Name"}</TableCell>
              <TableCell>{"Manfacturer"}</TableCell>
              <TableCell>{"Price"}</TableCell>
              <TableCell>{"Add"}</TableCell>
            </TableRow>
          </TableHead>
          {storeData
            .filter((data) =>
              data.name.toLowerCase().includes(productName.toLowerCase())
            )
            .map((data) => (
              <StoreContainer key={data.id}>
                <TableRow>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.manufacturer}</TableCell>
                  <TableCell>{data.price}</TableCell>
                  <TableCell onClick={(e) => handleAddProduct(data)}>
                    {<AddIcon />}
                  </TableCell>
                </TableRow>
              </StoreContainer>
            ))}
        </Table>
      </MainContainer>
      <PayButtonContainer>
        <Button
          variant="contained"
          style={{ background: "green" }}
          onClick={handleOpen}
        >
          {"BUY"}
        </Button>
      </PayButtonContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
