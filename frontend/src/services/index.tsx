import axios from "axios";

export const GET_ALL_TODO_DATA = async () => {
  try {
    const allTodos = await axios.get("http://localhost:3001/todos");
    return allTodos.data;
  } catch (error) {
    console.error(error);
  }
};

export const ADD_TODO = async (data: {
  name: string;
  description: string;
  price: number;
}) => {
  try {
    const allTodos = await axios.post("http://localhost:3001/todos", data);
    return allTodos.data;
  } catch (error) {
    console.error(error);
  }
};

export const DELETE_TODO = async (id: number) => {
  try {
    const allTodos = await axios.delete(`http://localhost:3001/todos/${id}`);
    return allTodos.data;
  } catch (error) {
    console.error(error);
  }
};
export const UPDATE_TODO = async (todo: {
  id: number;
  name: string;
  description: string;
  price: number;
}) => {
  try {
    const allTodos = await axios.put(
      `http://localhost:3001/todos/${todo.id}`,
      todo
    );
    return allTodos.data;
  } catch (error) {
    console.error(error);
  }
};
