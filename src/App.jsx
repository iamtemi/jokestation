import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import "./styles/App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <h1>JOKE STATION</h1>
      <Header />

      <Routes>
        <Route path="/start" element={<LandingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/saved-jokes" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
