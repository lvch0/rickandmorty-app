import { Route, Routes } from "react-router-dom";
import CharacterPage from "../pages/character/CharacterPage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import { Layout } from "../shared";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
export default Router;
