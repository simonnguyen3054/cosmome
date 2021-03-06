import React from "react";
import { Link as RouteLink } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <RouteLink to="/">Cosmome</RouteLink>
      </h1>
      <ul>
        <li>
          <RouteLink to="/profile">Join Comunity</RouteLink>
        </li>
        <li>
          <RouteLink to="/profile">Login</RouteLink>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
