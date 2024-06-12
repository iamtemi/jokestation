import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import "./styles/App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:category" element={<HomePage />} />
        <Route path="/saved-jokes" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
