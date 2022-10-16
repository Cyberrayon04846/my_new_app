import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import MeAppHtml from "./pages/Me_app.html.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/me_app/me_app.html" element={<MeAppHtml />} />
    </Routes>
  );
}
