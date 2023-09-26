import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

const UserContext = createContext("");

export function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

export function Component5() {
  const user1 = useContext(UserContext);
   console.log("Hello"+user1)
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user1} again!`}</h2>
    </>
  );
}
