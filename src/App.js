import Home from "./component/Pages/Home";
import Navbar from "./component/Navbar";
import UsersProvider from "./context";
import Footer from "./component/Footer";

function App() {
  return (
    <UsersProvider>
      <Navbar />
      <Home />
      <Footer />
    </UsersProvider>
  );
}

export default App;
