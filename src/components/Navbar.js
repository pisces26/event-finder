import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to={"/"}><img src="/Assets/all.png" alt="all" className="nav-img"></img>All</Link></li>
      <li><Link to={"/category/Plays"}><img src="/Assets/plays.png" alt="all" className="nav-img"></img>Plays</Link></li>
      <li><img src="/Assets/concerts.png" alt="all" className="nav-img"></img>Concerts</li>
      <li><img src="/Assets/comedy.png" alt="all" className="nav-img"></img>Standup</li>
      <li><img src="/Assets/activities.png" alt="all" className="nav-img"></img>Activities</li>
    </ul>
  </nav>
);

export default Navbar;
