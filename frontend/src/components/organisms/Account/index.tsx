import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React from "react";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
interface AccountProps {
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickCreateAccount: (e: any) => void;
  email: string;
  errorMessage: string;
}
const AcccountContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  width: "480px",
});
const MuiButton = styled(Button)({
  backgroundColor: "green",
  color: "black",
  width: "100%",
  ":disabled": {
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "green",
    },
  },
});
const Account = ({
  email,
  onClickCreateAccount,
  onChangeEmail,
  errorMessage,
}: AccountProps) => {
  return (
    <AcccountContainer>
      <TextField
        placeholder="Enter Account email address"
        size="small"
        value={email}
        onChange={onChangeEmail}
        error={errorMessage !== ""}
        helperText={errorMessage}
        sx={{ width: "100%" }}
      />
      <MuiButton
        disabled={errorMessage ? true : false}
        onClick={onClickCreateAccount}
      >
        Create Account
      </MuiButton>
    </AcccountContainer>
  );
};

export default Account;
