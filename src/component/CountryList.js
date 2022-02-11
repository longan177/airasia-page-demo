import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { countries } from "./data";
import { useUserContext } from "../context";

function CountryList() {
  return (
    <div className="country-container fixed-container">
      <div className="countries-container">
        {countries.map((country) => {
          return <Country key={country.id} {...country} />;
        })}
      </div>
    </div>
  );
}

export default CountryList;

function Country({ name, url }) {
  const [selected, setSelected] = useState(false);
  const { generateMsg } = useUserContext();
  const handleClick = (name) => {
    generateMsg();
    setSelected(!selected);
  };
  return (
    <div
      onClick={() => handleClick(name)}
      href="#"
      className="country-img-container"
    >
      <img
        className={`${selected ? "selected" : "hover-active"} `}
        src={url}
        alt="aze"
      ></img>
      <div className="country-name">{name}</div>

      <div className={`icon__overlay   ${selected && "icon__overlay-active"} `}>
        <FontAwesomeIcon size="1x" className="fa-loves" icon={faHeart} />
      </div>
    </div>
  );
}
