import React from "react";
import TodoTable from "../../components/organisms/TodoTable";
import SideBar from "../../components/organisms/SideBar";
import { Box } from "@mui/material";

const TodoListPage = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <TodoTable />
      </Box>
    </div>
  );
};

export default TodoListPage;
