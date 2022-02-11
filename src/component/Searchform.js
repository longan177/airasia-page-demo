import React from "react";

function Searchform() {
  return (
    <section className="search-form fixed-container">
      <div className="form-logo">
        <img src="/AirAsia_logo.svg" alt="logo"></img>
      </div>

      <h2 className="form-title">Whats'on your bucket list?</h2>
      <h3 className="form-description">Choose at least one to continue</h3>

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
