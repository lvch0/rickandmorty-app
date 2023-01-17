import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";
import { ThemeConfig } from "./config/theme.config";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </Provider>
);
