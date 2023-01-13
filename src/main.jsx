import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContext from "./Contexts/Context/AuthContext";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <AuthContext>
      <App />
      <Toaster />
    </AuthContext>
  </QueryClientProvider>
);
