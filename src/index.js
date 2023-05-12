import ReactDOM from "react-dom/client";
import Router from "./Router";
import { ThemeProvider } from "./context/ThemeContext";
import { HashRouter } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </HashRouter>
);
