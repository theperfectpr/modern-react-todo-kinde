
export type Todo = {
    id: number;
    title: string;
    isCompleted: boolean;
  };

export  type HeaderProps = {
    totalTodos: number;
    totalCompletedTodos: number;
  };

export  type CounterProps = {
    totalTodos: number;
    totalCompletedTodos: number;
  };

export  type ButtonTypeProps = {
    buttonType?: "primary" | "secondary";
    children: React.ReactNode;
    onClick?:  () => void
  };

export  type AddTodoFormProps = {
    handleAddTodo: (todoText: string) => void;
  };
  
export type TodosContextProps = {
  children: React.ReactNode;
};

export type DeleteBtnProps = {
  id: number;
};