import styled from "@emotion/styled";
import {
  Box,
  Checkbox,
  Icon,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  GET_ALL_TODO_DATA,
  DELETE_TODO,
  ADD_TODO,
  UPDATE_TODO,
} from "../../../services";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";
import PopupBox from "../../molecules/PopupBox";
import { TODO_LIST, tableHeader } from "../../../utils/constant";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; //
import CheckListModal from "../../molecules/CheckListModal";

const TodoTableContainer = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});
const TableBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export interface TodoTableProps {
  id: number;
  name: string;
  description: string;
  price: number;
  isChecked: boolean;
}

const SearchContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});
const TodoTable = () => {
  const [todoData, setTodoData] = useState<TodoTableProps[]>([]);
  const [searchData, setSearchData] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isEditable, setIsEditable] = useState(false);
  const [id, setId] = useState(0);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isChecked, setIsChecked] = useState(false);
  const [filterData, setFilterData] = useState<TodoTableProps[]>([]);
  const [post, setPost] = useState(0);
  useEffect(() => {
    GET_ALL_TODO_DATA().then((res) => {
      setTodoData(res);
    });
  }, [post]);

  const handleAdd = () => {
    const data = {
      name: name,
      description: description,
      price: price,
    };
    console.log("I am adding");
    ADD_TODO(data).then((res) => {
      //   setTodoData([res, ...todoData]);
      console.log(res);
      console.log("success");
      setName("");
      setDescription("");
      setPrice(0);
      setPost(post + 1);
    });
    setOpen(false);
  };
  const handleAddClick = () => {
    setOpen(true);
  };
  const handleUpdate = () => {
    const data = {
      id: id,
      name: name,
      description: description,
      price: price,
    };
    console.log("I am updating");
    UPDATE_TODO(data).then((res) => {
      //   setTodoData([res,...todoData]);
      console.log(res);
      console.log("success to update");
      setName("");
      setDescription("");
      setIsEditable(false);
      setPost(post + 1);
    });
    setOpen(false);
  };

  const handleEditClick = (data: {
    id: number;
    name: string;
    description: string;
    price: number;
  }) => {
    setOpen(true);
    setId(data.id);
    setName(data.name);
    setDescription(data.description);
    setPrice(data.price);
    setIsEditable(true);
    console.log("Edit clicked");
    console.log(data);
  };

  const handleDeleteClick = (id: number) => {
    DELETE_TODO(id).then((data) => {
      console.log("Delete" + data);
    });
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleAddPriceChange = (e: any) => {
    setPrice(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
    console.log("I am close");
  };
  var totalPrice = todoData.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  const handleSort = (key: string) => {
    // const sortedData = [...todoData];
    // sortedData.sort((a, b) => a.price - b.price).reverse();
    // setTodoData(sortedData);

    const sortedData = [...todoData];[1,2,3]
    sortedData.sort((a, b) => {
      if (a.price < b.price) return sortOrder === "asc" ? -1 : 1;
      if (a.price > b.price) return sortOrder === "asc" ? 1 : -1;
      // if (a.price > b.price) return a.brice - b.price;
      return 0;
    });

    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    setTodoData(sortedData);
  };
  const AddToCheckList = (id: number) => {
    const updatedTodoData = todoData.map((todo) =>
      todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    );

    setTodoData(updatedTodoData);
  };

  const ViewCheckList = () => {
    console.log("ViewCheckList called");
    const filteredSelectedData = todoData.filter(
      (todo) => todo.isChecked === true
    );

    console.log(filteredSelectedData);
    setFilterData(filteredSelectedData);
    setIsChecked(!isChecked);
  };
  console.log("TotalPrice" + totalPrice);
  return (
    <TodoTableContainer>
      <Typography variant="h4" color={"white"} sx={{ textAlign: "center" }}>
        {TODO_LIST}
      </Typography>
      <SearchContainer>
        <TextField
          placeholder="Search By Name"
          size="small"
          sx={{ height: "100%" }}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            onClick={handleAddClick}
            startIcon={<AddIcon />}
            variant="outlined"
          >
            Add {totalPrice}
          </Button>
          <Button onClick={ViewCheckList} variant="outlined">
            Add CheckList
          </Button>
          {isChecked ? (
            <div>
              <CheckListModal
                handleClose={() => setIsChecked(false)}
                data={filterData}
                open={isChecked}
              />
            </div>
          ) : (
            <></>
          )}
        </Box>
      </SearchContainer>
      {open && (
        <PopupBox
          open={open}
          name={name}
          description={description}
          price={price}
          handlePriceChange={handleAddPriceChange}
          handleTextFieldChange={handleTextFieldChange}
          handleDescriptionChange={handleDescriptionChange}
          handleClose={handleClose}
          handleSubmit={isEditable ? handleUpdate : handleAdd}
        />
      )}
      <TableBox>
        <Table>
          <TableHead>
            <TableRow>
              {/* {tableHeader.map((element) => (
                <TableCell>{element}</TableCell>
              ))} */}
              <TableCell>{<Checkbox />}</TableCell>
              <TableCell>{"ID"}</TableCell>
              <TableCell>{"Name"}</TableCell>
              <TableCell>{"Description"}</TableCell>

              <TableCell>
                <Button
                  startIcon={<ArrowUpwardIcon />}
                  variant="text"
                  endIcon={<ArrowDownwardIcon />}
                  onClick={() => handleSort("price")}
                >
                  {"Price"}
                </Button>
              </TableCell>
              <TableCell>{"Update"}</TableCell>
              <TableCell>{"Delete"}</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {todoData
              .filter((todos) =>
                todos.name.toLowerCase().includes(searchData.toLowerCase())
              )
              .map((todos, index) => (
                <TableRow key={todos.id}>
                  <TableCell>
                    {
                      <Checkbox
                        checked={todos.isChecked}
                        //onChange

                        onClick={() => AddToCheckList(todos.id)}
                      />
                    }
                  </TableCell>
                  <TableCell>{todos.id}</TableCell>
                  <TableCell>{todos.name}</TableCell>

                  <TableCell>{todos.description}</TableCell>
                  <TableCell>{todos.price}</TableCell>
                  <TableCell onClick={() => handleEditClick(todos)}>
                    <EditIcon />
                  </TableCell>
                  <TableCell onClick={() => handleDeleteClick(todos.id)}>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableBox>
    </TodoTableContainer>
  );
};

export default TodoTable;
