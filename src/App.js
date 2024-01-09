import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoriteTodos } from "./components/FavoriteTodos";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="favorite-todos" element={<FavoriteTodos/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
