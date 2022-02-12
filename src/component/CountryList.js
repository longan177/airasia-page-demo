import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import { useUserContext } from "../context";

function CountryList() {
  const { countriesList } = useUserContext();
  return (
    <div className="country-container fixed-container">
      <div className="countries-container">
        {countriesList.map((country) => {
          return <Country key={country.id} {...country} />;
        })}
      </div>
    </div>
  );
}

export default CountryList;

function Country({ name, url }) {
  const [selected, setSelected] = useState(false);
  const { generateMsg, setSelectedList, selectedList } = useUserContext();
  const handleClick = (name, e) => {
    if (selectedList.includes(name)) {
      setSelectedList(selectedList.filter((n) => n !== name));
    } else {
      setSelectedList([...selectedList, name]);
    }

    setSelected(!selected);
  };

  return (
    <div
      onClick={(e) => handleClick(name, e)}
      href="#"
      className="country-img-container"
    >
      <img
        className={`${
          selectedList.includes(name) ? "selected" : "hover-active"
        } `}
        src={url}
        alt="aze"
      ></img>
      <div className="country-name">{name}</div>

      <div
        className={`icon__overlay   ${
          selectedList.includes(name) && "icon__overlay-active"
        } `}
      >
        <FontAwesomeIcon size="1x" className="fa-loves" icon={faHeart} />
      </div>
    </div>
  );
}
