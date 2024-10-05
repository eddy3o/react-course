import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import { PokemonProvider } from "./context/PokemonContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonProvider>
      <AppRoutes />
    </PokemonProvider>
  </StrictMode>
);
