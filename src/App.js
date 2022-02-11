import Home from "./component/Pages/Home";
import Navbar from "./component/Navbar";
import UsersProvider from "./context";

function App() {
  return (
    <UsersProvider>
      <Navbar />
      <Home />
    </UsersProvider>
  );
}

export default App;
