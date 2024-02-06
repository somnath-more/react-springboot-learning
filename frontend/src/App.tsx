import { Route, Routes } from "react-router";
import TodoListPage from "./pages/TodoListPage";
import Account from "./components/organisms/Account";
import AccountPage from "./pages/AccountPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<TodoListPage />} />
        <Route path="/" element={<AccountPage />} />
      </Routes>
    </>
  );
};

export default App;
