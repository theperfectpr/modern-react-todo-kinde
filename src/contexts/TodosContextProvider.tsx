import { createContext, useEffect, useState } from "react";
import { Todo, TodosContextProps } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TTodosContext = {
  todos: Todo[];
  totalTodos: number;
  totalCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialTodos = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
  return [];
};
export default function TodosContextProvider({ children }: TodosContextProps) {
  const { isAuthenticated } = useKindeAuth();

  //state
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  //derived state
  const totalTodos: number = todos.length;
  const totalCompletedTodos: number = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  //event handlers
  const handleAddTodo = (todoText: string) => {
    if (todoText === "") return;

    if (todos.length >= 3 && !isAuthenticated) {
      alert("You can only add 3 todos without logging in");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  };

  const onDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  //side effect -> fetching from api
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     const todos = await response.json();
  //     setTodos(todos.filter((todo: Todo) => todo.id < 10));
  //   };
  //   fetchTodos();
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalTodos,
        totalCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        onDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
