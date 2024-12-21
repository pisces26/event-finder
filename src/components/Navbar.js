import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to={"/"}><img src="/Assets/all.png" alt="all" className="nav-img"></img>All</Link></li>
      <li><Link to={"/category/Plays"}><img src="/Assets/plays.png" alt="plays" className="nav-img"></img>Plays</Link></li>
      <li><Link to={"/category/Concerts"}><img src="/Assets/concerts.png" alt="concerts" className="nav-img"></img>Concerts</Link></li>
      <li><Link to={"/category/Standup"}><img src="/Assets/comedy.png" alt="standup" className="nav-img"></img>Standup</Link></li>
      <li><Link to={"/category/Workshops"}><img src="/Assets/activities.png" alt="all" className="nav-img"></img>Workshops</Link></li>
      <li><Link to={"/category/Activities"}><img src="/Assets/activities.png" alt="all" className="nav-img"></img>Activities</Link></li>
    </ul>
  </nav>
);

export default Navbar;
