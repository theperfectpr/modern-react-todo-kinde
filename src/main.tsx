import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId={JSON.parse(
        JSON.stringify(import.meta.env.VITE_KINDE_CLIENT_ID)
      )}
      domain="https://kbaruadev.kinde.com"
      redirectUri={JSON.parse(
        JSON.stringify(import.meta.env.VITE_KINDE_REDIRECT_URI)
      )}
      logoutUri={JSON.parse(
        JSON.stringify(import.meta.env.VITE_KINDE_LOGOUT_URI)
      )}
      isDangerouslyUseLocalStorage={true}
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
