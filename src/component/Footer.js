import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../context";
function Footer() {
  const { selectedList } = useUserContext();
  return (
    <footer>
      <div className="fixed-container footer-container">
        <button
          className={`btn-cont ${selectedList.length !== 0 && "btn-active"} `}
        >
          Continue{" "}
          <FontAwesomeIcon className="fa-arrow" icon={faArrowCircleRight} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
