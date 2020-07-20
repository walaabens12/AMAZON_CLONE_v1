import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCartSharp';

function Navbar() {
  return (
    <nav className="header">
      <Link to="/">
        {/* Logo de Amazon   */}
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="Header_Amazon_Logo"
        />
      </Link>

      {/* Logo de Amazon   */}
      <div className="Search_Bar">

        <input type="text" className="Header_search_bar" />
        <SearchIcon className="Header_Amazon_SearchIcon" />
      </div>


      {/* les trois Lien Apres le NavBar */}
      <div className="after_Search_Bar">
        {/* 1 */}

        <Link to="/login" className="Header_Link">
          <div className="Header_option">
            <span className="Header_option_ligne_1">Hello, Sign in</span>
            <span className="Header_option_ligne_2">Accounts & Listes </span>
          </div>
        </Link>
        {/* 2 */}


        <Link to="/" className="Header_Link">
          <div className="Header_option">
            <span className="Header_option_ligne_1">Returns</span>
            <span className="Header_option_ligne_2">& Orders</span>
          </div>
        </Link>
        {/* 3 */}


        <Link to="/" className="Header_Link">
          <div className="Header_option">
            <span className="Header_option_ligne_1" >Your</span>
            <span className="Header_option_ligne_2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout">
        <div className="Last_Pick">
              <ShoppingBasketIcon className="Charyou" />
              <span className="counting_items">0</span>
              </div>
        </Link>

      </div>


    </nav>
  );
}

export default Navbar;
