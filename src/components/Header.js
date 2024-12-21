import React from "react";
import CitySelector from "../components/CitySelector.js";
import ProfileButton from "../components/ProfileButton.jsx";
import RightSideMenu from "../components/RightSideMenu.jsx";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
  <Link to="/">
    <div className="logo">
    <img src="Assets/logo.png" alt="Logo" className="logo-image" />EventFox
    </div>
  </Link>
    <div className="actions">
      <button><Link to={"/CreateEvent/EventForm"}>List Your Event</Link></button>
      <CitySelector />
      <div className="profile-menu">
      <ProfileButton/>
      </div>
      <div className="right-side-menu">
      <RightSideMenu />
      </div>
    </div>
  </header>
);

export default Header;
