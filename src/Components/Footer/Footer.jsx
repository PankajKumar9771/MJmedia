import React from "react";
import "./Footer.css";
import whatsapp_icon from "../../assets/icons8-whatsapp-48.png";
import instagram_icon from "../../assets/icons8-instagram-48.png";
import linkedin_icon from "../../assets/icons8-linkedin-48.png";
import email_icon from "../../assets/icons8-gmail-48.png";  
import youtube_icon from "../../assets/icons8-youtube-48.png";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to={"/"} className="logo">
            <h3>MJMEDIA</h3>
          </Link>

          <p>
            Welcome to MJMEDIA. Where we nurture young minds for a brighter
            Businessess.
          </p>
          <div className="footer-social-icon">
            <a
              href="https://www.instagram.com/mj.media.in?igsh=MWdyYjZwMzZ3bHk1bA==  "
              target="_main"
            >
              <img className="insta" src={instagram_icon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-j-media-814754325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_main"
            >
              <img src={linkedin_icon} alt="" />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VaYduDaKGGGAc1SNjF3e"
              target="_main"
            >
              <img src={whatsapp_icon} alt="" />
            </a>
            <a href="https://www.youtube.com/@MJMEDIAMAHOBA" target="_main">
              <img src={youtube_icon} alt="" />
            </a>
            <a
              href="mailto:mjmediainfo01@gmail.com?subject=Your%20Subject%20Here"
              target="_main"
            >
              <img src={email_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Services</h2>
          <ul>
            <Link className="link" to={"/"}>
              <li>Home</li>
            </Link>
            <Link className="link" to={"/about"}>
              <li>About Us</li>
            </Link>

            <li>Privacy-Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <a href="tel:+919992460014">
              <li>+91 99924 60014</li>
            </a>
            <a href="mailto:mjmediainfo01@gmail.com?subject=Your%20Subject%20Here">
              <li>mjmediainfo01@gmail.com</li>
            </a>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; mjmedia - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
