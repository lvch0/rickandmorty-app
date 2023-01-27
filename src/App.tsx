import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { NotificationProvider } from "./context/NotificationProvider";
import { Suspense } from "react";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={"Cargando..."}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
