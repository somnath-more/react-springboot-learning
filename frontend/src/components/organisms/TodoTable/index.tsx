import styled from "@emotion/styled";
import {
  Box,
  Icon,
  IconButton,
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
const TodoTableContainer = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  backgroundColor: "black",
});
const TableBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "green",
});

interface TodoTableProps {
  id: number;
  name: string;
  description: string;
  price: string;
}

const SearchContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: "pink",
  width: "100%",
});
const TodoTable = () => {
  const [todoData, setTodoData] = useState<TodoTableProps[]>([]);
  const [searchData, setSearchData] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [id, setId] = useState(0);
  useEffect(() => {
    GET_ALL_TODO_DATA().then((res) => {
      setTodoData(res);
    });
  });
  const handleAdd = () => {
    const data = {
      name: name,
      description: description,
    };
    console.log("I am adding");
    ADD_TODO(data).then((res) => {
      //   setTodoData([res, ...todoData]);
      console.log(res);
      console.log("success");
      setName("");
      setDescription("");
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
    };
    console.log("I am updating");
    UPDATE_TODO(data).then((res) => {
      //   setTodoData([res,...todoData]);
      console.log(res);
      console.log("success to update");
      setName("");
      setDescription("");
      setIsEditable(false);
    });
    setOpen(false);
  };
  const handleEditClick = (data: {
    id: number;
    name: string;
    description: string;
  }) => {
    setOpen(true);
    setId(data.id);
    setName(data.name);
    setDescription(data.description);
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

  const handleClose = () => {
    setOpen(false);
    console.log("I am close");
  };

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
        <Button
          onClick={handleAddClick}
          startIcon={<AddIcon />}
          variant="outlined"
        >
          Add
        </Button>
      </SearchContainer>
      {open && (
        <PopupBox
          open={open}
          name={name}
          description={description}
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
              {tableHeader.map((element) => (
                <TableCell>{element}</TableCell>
              ))}
              {/* <TableCell>{"ID"}</TableCell>
              <TableCell>{"Name"}</TableCell>
              <TableCell>{"Description"}</TableCell>
              <TableCell>{"Update"}</TableCell>
              <TableCell>{"Delete"}</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {todoData
              .filter((todos) =>
                todos.name.toLowerCase().includes(searchData.toLowerCase())
              )
              .map((todos, index) => (
                <TableRow key={todos.id}>
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
