import { Routes, Route } from "react-router-dom";
import Portfolio from "./features/home/screen/Portfolio";

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}