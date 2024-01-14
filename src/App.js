import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import Users from "./Pages/UsersPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
