import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        src="https://capebretonspectator.com/wp-content/uploads/2018/01/Amazon-Logo.jpg"
        alt="amazon logo"
        className="header__logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          Hello Kingsely<span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          Return<span className="header__optionLineOne">& Orders</span>
        </div>
        <div className="header__option">
          Your<span className="header__optionLineOne">Prime</span>
        </div>
        <div className="header__optionBasket">
         <ShoppingBasketIcon />
         <span className="header__optiomLineTwo header__basketCount"> 0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
