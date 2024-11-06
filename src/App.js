import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./COMP/Header";
import Home from "./COMP/Home";
import Coins from "./COMP/Coins";
import Exchanges from "./COMP/Exchanges";
import CoinDetails from "./COMP/CoinDetails";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/exchanges" element={<Exchanges></Exchanges>}></Route>
        <Route path="/coin/:id" element={<CoinDetails></CoinDetails>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
