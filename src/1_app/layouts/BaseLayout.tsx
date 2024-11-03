import Home from "@pages/Home/ui/Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function BaseLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
