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
        <div className="disclaimer">
          Created by Wei Loong&#169;2022
          <a
            target="_blank"
            href="https://github.com/longan177/airasia-page-demo"
          >
            <span>View Source Code </span>
          </a>
        </div>
        <Link to="/thanks">
          <button
            disabled={selectedList.length === 0}
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
