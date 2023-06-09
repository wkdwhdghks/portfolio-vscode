import ReactDOM from "react-dom/client";
import Router from "./Router";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/reset.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
