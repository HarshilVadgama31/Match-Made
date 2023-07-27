import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchFeed from "./pages/MatchFeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MatchFeed />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
