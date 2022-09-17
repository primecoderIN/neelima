import { Fragment } from "react";
import ReactDOM from "react-dom/client"; //You will never import this again in other file
import "./index.css";
import App from "./App";

//React dom helps us create a root element to render content and manage the dom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <App />
  </Fragment>
);
