import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId={
        process.env.NODE_ENV === "development"
          ? JSON.parse(JSON.stringify(import.meta.env.VITE_KINDE_CLIENT_ID))
          : "67d769eda4fe4e1a9d78ca3ab2e3b87c"
      }
      domain="https://kbaruadev.kinde.com"
      redirectUri={
        process.env.NODE_ENV === "development"
          ? JSON.parse(JSON.stringify(import.meta.env.VITE_KINDE_REDIRECT_URI))
          : "https://modern-react-todo-kinde.vercel.app"
      }
      logoutUri={
        process.env.NODE_ENV === "development"
          ? JSON.parse(JSON.stringify(import.meta.env.VITE_KINDE_LOGOUT_URI))
          : "https://modern-react-todo-kinde.vercel.app"
      }
      isDangerouslyUseLocalStorage={true}
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
