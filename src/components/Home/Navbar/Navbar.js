import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBell,
  faChartPie,
  faDashboard,
  faEnvelope,
  faGear,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="mb-4" src='https://imgur.com/zh0o071.png' alt="siteLogo" />
      </Link>

      <ul className="navbar__list">
        <NavLink to="/">
          <li className="navbar__item ">
            <div className="navbar__link ">
              <FontAwesomeIcon className="navbar__icon" icon={faHome} />
            </div>
          </li>
        </NavLink>

        <NavLink to="/Dashboards">
          <li className="navbar__item ">
            <div className="navbar__link ">
              <FontAwesomeIcon className="navbar__icon" icon={faDashboard} />
            </div>
          </li>
        </NavLink>

        <NavLink to="/Graph">
          <li className="navbar__item ">
            <div className="navbar__link ">
              <FontAwesomeIcon className="navbar__icon" icon={faChartPie} />
            </div>
          </li>
        </NavLink>

        <NavLink to="/Messege">
          <li className="navbar__item ">
            <div className="navbar__link ">
              <FontAwesomeIcon className="navbar__icon" icon={faEnvelope} />
            </div>
          </li>
        </NavLink>

        <NavLink to="/Notification">
          <li className="navbar__item ">
            <div className="navbar__link ">
              <FontAwesomeIcon className="navbar__icon" icon={faBell} />
            </div>
          </li>
        </NavLink>

        <NavLink to="/Settings">
          <li className="navbar__item">
            <div className="navbar__link ">
              <FontAwesomeIcon className="navbar__icon" icon={faGear} />
            </div>
          </li>
        </NavLink>

        <NavLink to="/LogOut">
          <li className="navbar__item ">
            <div className="navbar__link ">
              <FontAwesomeIcon
                className="navbar__icon"
                icon={faArrowRightFromBracket}
              />
            </div>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
