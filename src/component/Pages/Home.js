import React from "react";
import CountryList from "../CountryList";
import Footer from "../Footer";
import Searchform from "../Searchform";

function Home() {
  return (
    <main>
      <Searchform />
      <CountryList />
      <Footer />
    </main>
  );
}

export default Home;
