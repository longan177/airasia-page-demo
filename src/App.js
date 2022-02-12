import Home from "./component/Pages/Home";
import Navbar from "./component/Navbar";
import UsersProvider from "./context";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appreciation from "./component/Pages/Appreciation";

function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks" element={<Appreciation />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;
