import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

export function AppRoutes({ handleClick }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  />} />
      </Routes>
    </Router>
  );
}