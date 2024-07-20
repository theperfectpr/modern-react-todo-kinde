import { useTodosContext } from "../lib/hooks";

export default function Counter() {
  const { totalTodos, totalCompletedTodos } = useTodosContext();
  return (
    <p>
      <b>{totalCompletedTodos}</b> / {totalTodos} Todos Completed
    </p>
  );
}
