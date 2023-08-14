import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchFeed from "./pages/MatchFeed";
// import Register from "./pages/Register";
// import CheckboxChip from "./components/CheckboxChip";
import HomePage from "./pages/HomePage";
// import InputSearch from "./components/InputSearch";
// import HobbyDialog from "./components/HobbyDialog";
//import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
