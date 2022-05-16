import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <div className="font-PlusJakartaDisplay bg-[url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/body-background.9e7d96f6.png)] bg-cover h-auto">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
