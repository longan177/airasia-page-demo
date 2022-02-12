import React from "react";
import { useUserContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  const { isSidebarActive, setIsSidebarActive } = useUserContext();
  return (
    <React.Fragment>
      <div
        onClick={() => setIsSidebarActive(false)}
        className={`sidebar__overlay  ${
          isSidebarActive && "sidebar__overlay__show"
        } `}
      ></div>
      <div
        className={`sidebar__content ${
          isSidebarActive && "sidebar__content__show"
        } `}
      >
        <div className="sidebar-container">
          <div className="sidebar-header">
            <img src="/AirAsia_logo.svg" alt="logo" />
            <FontAwesomeIcon
              onClick={() => setIsSidebarActive(false)}
              className="fa-close"
              size="3x"
              icon={faClose}
            />
          </div>
          <ul className="nav-links-sidebar">
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
