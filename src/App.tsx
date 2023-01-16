import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { NotificationProvider } from "./context/NotificationProvider";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
