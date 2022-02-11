import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { countries } from "./data";

function CountryList() {
  console.log(countries);
  return (
    <div className="country-container fixed-container">
      <div className="countries-container">
        {countries.map((country) => {
          return <Country {...country} />;
        })}
      </div>
    </div>
  );
}

export default CountryList;

function Country({ name, url }) {
  return (
    <a href="#" className="country-img-container">
      <img className="country-img" src={url} alt="aze"></img>
      <div className="country-name">{name}</div>

      <div className="icon__overlay">
        <FontAwesomeIcon size="1x" className="fa-loves" icon={faHeart} />
      </div>
    </a>
  );
}
