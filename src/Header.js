import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{basket, user}]=useStateValue();
  const login =()=>{
    if(user)
    auth.signOut();
    }
  console.log(basket);
    return (
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__github">
              {/* <img src="" alt=""/> */}
              <a href="" target="_blank">
              <GitHubIcon />GitHub
              </a>
            </div>
            <div className="header__nav">
              <Link className="header__link" to={!user && "/login"}>
                  <div onClick={login} className="header__option">
                  <span className="header__optionLineOne"> Hello {!user? ('Guest'):(user.email)}</span>
                <span className="header__optionLineTwo">{user? "Sign out": "Sign In"}</span>
                  </div>
                
              </Link>
              <Link className="header__link" to="/orders">
              <div className="header__option">
              <span className="header__optionLineOne"> Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>

                
              </Link>
              <Link className="header__link" to="/">
              <div className="header__option">
              <span className="header__optionLineOne"> Your</span>
                <span className="header__optionLineTwo">Prime</span>
              </div>
              </Link>
              <Link to="/checkout" className="header__link">
                  <div className="header__optionBasket">
                  <ShoppingCartIcon className="header__optionBasketIcon" />
                  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                  </div>
              </Link>
              
            </div>
            
        </nav>
    )
}

export default Header
