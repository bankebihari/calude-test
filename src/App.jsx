import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.PROD ? "/Portfolio" : ""}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
