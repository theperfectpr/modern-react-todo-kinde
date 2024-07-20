import { useTodosContext } from "../lib/hooks";
import { DeleteBtnProps } from "../lib/types";

export default function DeleteBtn({ id }: DeleteBtnProps) {
  const { onDeleteTodo } = useTodosContext();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
