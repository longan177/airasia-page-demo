import React from "react";
import { useUserContext } from "../context";
import { message } from "./data";

function Searchform() {
  const { messageRender } = useUserContext();

  return (
    <section className="search-form fixed-container">
      <div className="form-logo">
        <img src="/AirAsia_logo.svg" alt="logo"></img>
      </div>

      <h2 className="form-title">Whats'on your bucket list?</h2>
      <h3 className="form-description">{messageRender}</h3>

      <form className="form-control">
        <input
          type="text"
          maxLength={30}
          placeholder="Search a country or region"
        ></input>
      </form>
    </section>
  );
}

export default Searchform;
