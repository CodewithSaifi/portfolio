import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import logo from "./assets/logo.svg";

const link = document.querySelector("link[rel~='icon']");
if (link) {
  link.href = logo;
} else {
  const newLink = document.createElement("link");
  newLink.rel = "icon";
  newLink.href = logo;
  document.head.appendChild(newLink);
}

createRoot(document.getElementById("root")).render(<App />);
