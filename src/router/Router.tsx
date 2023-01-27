import { Route, Routes } from "react-router-dom";
import { Layout } from "../shared";
import { HomePage, LoginPage, CharacterPage } from "../pages";
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
