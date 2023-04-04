import './Navigation.styles.scss'
import React from "react";
import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { ReactComponent as Carticon } from "../../assets/shopping-bag.svg";

import { userContext } from "../../context/user.context";
import { signOutUser } from '../../utility/firebase/firebase.utility';

function Navigation() {
  const { currentUser } = useContext(userContext);
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
          <Link>
            
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
