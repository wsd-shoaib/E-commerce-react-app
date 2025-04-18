import React, { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider/ShopContextProvider";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    window.scrollTo(0, 0);
  };

  const NavItems = [
    { path: "/", link: "Home" },
    { path: "/products", link: "Products" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];

  const getTotalCartCount = () => {
    let total = 0;
    for (let productId in cartItems) {
      const sizes = cartItems[productId];
      for (let size in sizes) {
        total += sizes[size];
      }
    }
    return total;
  };

  return (
    <div className="Navbar-area">
      <nav>
        <div className="menu-bar" onClick={toggleMenu}>
          {menu ? (
            <LiaTimesSolid className="Times" />
          ) : (
            <FaBars className="bar" />
          )}
        </div>
        <Link to={"/"} className="nav-logo">
          <img src={"./assets/Shaifan-logo.png"} alt="logo" />
        </Link>
        <ul className={`nav-menu ${menu ? "" : "hide-menu"}`}>
          {NavItems.map(({ path, link }) => (
            <li key={path} className="pt-3">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "navlink "
                }
                to={path}
                onClick={toggleMenu}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="login-cart">
          <Link to={"/login"} className="login pt-1">
            Login
          </Link>
          <div className="cart">
            <Link to={"/cart"} className="cart-icon">
              <MdOutlineShoppingCart />
            </Link>
          </div>
          <span className="cart-count">{getTotalCartCount()}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
