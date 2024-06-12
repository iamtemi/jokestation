import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import SavedJokes from "./pages/SavedJokes/SavedJokes";

export default function App() {
  return (
    <BrowserRouter>
      <h1>JOKE STATION</h1>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:category" element={<HomePage />} />
        <Route path="/saved-jokes" element={<SavedJokes />} />
      </Routes>
    </BrowserRouter>
  );
}
