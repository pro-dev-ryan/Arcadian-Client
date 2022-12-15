import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContext from "./Contexts/Context/AuthContext";
import "./index.css";
import { Toaster } from "react-hot-toast";
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <AuthContext>
      <App />
      <Toaster />
    </AuthContext>
  </QueryClientProvider>
=======
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <AuthContext>
        <App />
        <Toaster />
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>
>>>>>>> 65407b04e6a09f1700d04719394131d24a758880
);
