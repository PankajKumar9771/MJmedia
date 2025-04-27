import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setSticky(window.scrollY > 50);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setSticky(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // This function will collapse the navbar after clicking a link
  const handleNavItemClick = () => {
    const navbar = document.getElementById("navbarNavDropdown");
    if (navbar && window.innerWidth < 1200) {
      const bsCollapse = new window.bootstrap.Collapse(navbar, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-xl custom-padding ${
        sticky || location.pathname !== "/" ? "dark-nav" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h3 className="custom-width">MJ.Media</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item cursor-pointer">
              <NavLink
                className="nav-link"
                to="/"
                exact="true"
                onClick={handleNavItemClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink
                className="nav-link"
                to="/services"
                onClick={handleNavItemClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={handleNavItemClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink
                className="nav-link"
                to="/clients"
                onClick={handleNavItemClick}
              >
                Clients
              </NavLink>
            </li>
            {/* <li className="nav-item cursor-pointer">
              <NavLink className="nav-link" to="/admission" onClick={handleNavItemClick}>
                Admission
              </NavLink>
            </li> */}
            <li className="nav-item cursor-pointer">
              <NavLink
                className="nav-link"
                to="/gallery"
                onClick={handleNavItemClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink
                className="nav-link"
                to="/team"
                onClick={handleNavItemClick}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item cursor-pointer">
              <NavLink to="/contact" onClick={handleNavItemClick}>
                <button className="nav-btn btn rgb-border-btn">
                  Contact Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
