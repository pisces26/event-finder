import React from "react";
import CitySelector from "../components/CitySelector.js";
import ProfileButton from "../components/ProfileButton.jsx";
import RightSideMenu from "../components/RightSideMenu.jsx";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
  <Link to="/index">
    <div className="logo">
    <img src="Assets/logo.png" alt="Logo" className="logo-image" />EventFox
    </div>
  </Link>
    <div className="actions">
      <button>List Your Event</button>
      <CitySelector />
      <div className="profile-menu">
      <ProfileButton/>
      <RightSideMenu />
      </div>

    </div>
  </header>
);

export default Header;
