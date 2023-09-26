import { Typography } from '@mui/material';
import React, { createContext, useState } from 'react';
import Two from './Two';

export interface UserContextProps {
  user: string;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

const USECONTEXT = () => {

  const [user, setUser] = useState("Jesse Hall");

  const contextValue: UserContextProps = { user };

  return (
    <>
      <UserContext.Provider value={contextValue}>
      <Typography variant="body1">{"This is user context Value Practise"}</Typography>
        <Typography variant="body1">{`Hello this is ${user} No:1`}</Typography>
        <Two />
      </UserContext.Provider>
    </>
  );
};

export default USECONTEXT;
