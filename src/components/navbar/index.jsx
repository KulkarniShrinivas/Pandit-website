import React, { useState } from "react";
import logo from "../../assets/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import "./navbar.scss";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img className="nav-logo" src={logo} alt="MarathiSarvaPooja Logo" />
          {isDesktopScreen && (
            <div className="phone-container">
              <PhoneIcon className="phone-icon" />
              <p>7865432910</p>
            </div>
          )}
        </div>
        {isDesktopScreen ? (
          <ul className="nav-paths-container">
            <li className="nav-list">
              <a className="nav-link" href="/allpujas/1">
                All Puja Services
              </a>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="/photos">
                Photos Gallery
              </a>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="/astro">
                Astrology
              </a>
              <div class="line"></div>
            </li>
          </ul>
        ) : (
          <IconButton
            sx={{
              width: "50px",
              height: "50px",
            }}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {!isNavOpen && (
              <MenuIcon
                sx={{
                  fontSize: "30px",
                  zIndex: "1000",
                }}
              />
            )}
          </IconButton>
        )}
      </div>
      {isNavOpen && (
        <>
          <IconButton
            sx={{
              width: "50px",
              height: "50px",
              position: "fixed",
              right: "10px",
              top: "5px",
              zIndex: "1000",
            }}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <CloseIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </IconButton>

          <ul className="nav-fullScreen-container">
            <li className="nav-list">
              <a className="nav-link" href="/allpujas/1">
                All Puja Services
              </a>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="/photos">
                Photos Gallery
              </a>
              <div class="line"></div>
            </li>
            <li className="nav-list">
              <a className="nav-link" href="/astro">
                Astrology
              </a>
              <div class="line"></div>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Navbar;
