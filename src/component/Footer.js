import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../context";
import { Link } from "react-router-dom";
function Footer() {
  const { selectedList } = useUserContext();
  return (
    <footer>
      <div className="fixed-container footer-container">
        <Link to="/thanks">
          <button
            className={`btn-cont ${selectedList.length !== 0 && "btn-active"} `}
          >
            Continue{" "}
            <FontAwesomeIcon className="fa-arrow" icon={faArrowCircleRight} />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
