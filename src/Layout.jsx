import { Routes, Route} from "react-router-dom";

import Footer from "./features/home/components/Footer";
import Home from "./features/home/screen/Home";


export default function Layout() {
  return (
    <div className="relative min-h-screen pb-17.5 sm:pb-14">

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Footer />
    </div>
  );
}
