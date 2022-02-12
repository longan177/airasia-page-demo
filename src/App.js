import Home from "./component/Pages/Home";
import Navbar from "./component/Navbar";
import UsersProvider from "./context";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appreciation from "./component/Pages/Appreciation";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <UsersProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks" element={<Appreciation />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  );
}

export default App;

// if target class contain blablabla then keep going?
