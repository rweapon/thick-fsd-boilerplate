import Home from "@pages/Home/ui/Page";
import { LayoutFooter } from "@widgets/footer";
import { LayoutHeader } from "@widgets/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function BaseLayout() {
  return (
    <BrowserRouter>
      <LayoutHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LayoutFooter />
    </BrowserRouter>
  );
}
