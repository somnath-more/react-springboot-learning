import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import React from "react";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router";
const StackContainer = styled(Stack)({
  gap: "20px",
  height: "auto",
  width: "200px",
  backgroundColor: "green",
});
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <StackContainer>
      <Button variant="outlined" onClick={() => navigate("/")}>
        {"Account"}
      </Button>
      <Button variant="outlined" onClick={() => navigate("/todo")}>
        {"TodoList"}
      </Button>
    </StackContainer>
  );
};

export default SideBar;
