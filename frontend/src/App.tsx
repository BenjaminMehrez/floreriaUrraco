import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Error404 from "./containers/Error404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
