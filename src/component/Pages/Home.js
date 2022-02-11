import React from "react";
import CountryList from "../CountryList";
import Searchform from "../Searchform";

function Home() {
  return (
    <main>
      <Searchform />
      <CountryList />
    </main>
  );
}

export default Home;
