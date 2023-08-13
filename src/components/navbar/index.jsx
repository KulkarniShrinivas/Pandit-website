import React, { useState } from "react";
import logo from "../../assets/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import "./navbar.scss";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/">
              <img
                className="nav-logo"
                src={logo}
                alt="MarathiSarvaPooja Logo"
              />
            </Link>

            {isDesktopScreen && (
              <div className="phone-container">
                <PhoneIcon className="phone-icon" />
                <p>7865432910</p>
              </div>
            )}
          </div>
          <ul
            className={
              isDesktopScreen
                ? "nav-paths nav-desktop"
                : isNavOpen
                ? "nav-paths nav-mobile-open"
                : "nav-paths nav-mobile"
            }
          >
            <li className="nav-list">
              <Link className="nav-link" to={"/allpujas/1"}>
                All Puja Services
              </Link>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to={"/contact"}>
                Contact Us
              </Link>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to={"/photos"}>
                Photos Gallery
              </Link>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <Link className="nav-link" to={"/astro"}>
                Astrology
              </Link>
              <div class="line"></div>
            </li>
          </ul>
          {!isDesktopScreen && (
            <IconButton
              sx={{
                width: "50px",
                height: "50px",
              }}
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {!isNavOpen ? (
                <MenuIcon
                  sx={{
                    fontSize: "30px",
                    zIndex: "1000",
                  }}
                />
              ) : (
                <CloseIcon
                  sx={{
                    fontSize: "30px",
                    zIndex: "1000",
                  }}
                />
              )}
            </IconButton>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
