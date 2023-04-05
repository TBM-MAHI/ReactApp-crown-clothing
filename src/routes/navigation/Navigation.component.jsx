import './Navigation.styles.scss'
import React from "react";
import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";

import CartIcon from '../../components/Cart-icon/CartIcon.component';
import CartDropdown from '../../components/cart-dropdown/CartDropdown.component';

import { userContext } from "../../context/user.context";
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utility/firebase/firebase.utility';

function Navigation() {
  const { currentUser } = useContext(userContext);
  const {iscartOpen } = useContext(CartContext);
  console.log("from navigatiin", currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={signOutUser}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon/>
        </div>
       {iscartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
