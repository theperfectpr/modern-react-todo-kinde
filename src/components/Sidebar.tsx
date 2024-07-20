import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, register, logout, isAuthenticated, isLoading } =
    useKindeAuth();
  const handleLogout = () => {
    logout();
    localStorage.setItem("todos", "");
  };
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px]">
      <AddTodoForm />
      <div className="mt-auto space-y-2 mb-2">
        {isLoading ? null : isAuthenticated ? (
          <Button onClick={handleLogout} buttonType="secondary">
            Logout
          </Button>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Login
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
