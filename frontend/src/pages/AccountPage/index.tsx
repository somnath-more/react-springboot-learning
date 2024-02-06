import React, { useState } from "react";
import Account from "../../components/organisms/Account";
import { useNavigate } from "react-router";
import { emailRegex } from "../../utils/constant";

const AccountPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailValue = e.target.value;
    if (emailValue.length === 0) {
      setErrorMessage("Please enter an email");
    } else if (!emailRegex.test(emailValue)) {
      setErrorMessage("Please enter a valid email");
    } else {
      setErrorMessage("");
    }
  };
  const handleAccount = () => {
    navigate("/todo");
    alert("sucessfully to sign in");
  };
  return (
    <div>
      <Account
        email={email}
        errorMessage={errorMessage}
        onChangeEmail={handleEmailChange}
        onClickCreateAccount={handleAccount}
      />
    </div>
  );
};

export default AccountPage;
