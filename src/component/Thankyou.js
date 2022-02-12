import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context";

function Thankyou() {
  const { setSelectedList } = useUserContext();
  return (
    <section className="appreciation-container fixed-container">
      <div className="form-logo">
        <img src="/AirAsia_logo.svg" alt="logo"></img>
      </div>
      <div className="appreciation-msg1">
        Thanks for letting us get to know you a little better!
      </div>
      <div className="appreciation-msg2">
        Look out for a little reward we'll be sending your way 😉
      </div>
      <Link to="/">
        <button
          onClick={() => setSelectedList([])}
          className="btn-cont btn-active"
        >
          Back to Home
        </button>
      </Link>
    </section>
  );
}

export default Thankyou;
