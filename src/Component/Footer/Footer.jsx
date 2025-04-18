import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-area mt-3">
      <div>
        <div className="footer-img">
          <Link to={"/"}>
            <img src={"assets/Shaifan-logo.png"} alt="" />
          </Link>
        </div>
        <div className="footer-link">
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>About us</li>
            <li> Contact</li>
          </ul>
        </div>
        <div className="footer-pages">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaTelegram />
          </a>
        </div>
        <hr className="hr" />
        <div className="footer-copyright">
          <span>Copyright @ 2025 -All Right Reserved </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
