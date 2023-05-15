import "./Navigation.styles.scss";

import { useSelector} from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";

import CartIcon from "../../components/Cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";
import { select_isCartOpen } from '../../redux-store/cart/cart.selector';
import Profile from "../../components/Profile-Icon/Profile.component";
import ProfileDropDown from "../../components/Profile-dropdown/ProfileDropDown.component";


import { signOutUser } from "../../utility/firebase/firebase.utility";

function Navigation() {
  let signOutUserhandler = () => signOutUser();
    
  const currentUser = useSelector(state => state.user.currentUser);
  const  iscartOpen  = useSelector(select_isCartOpen);
  // console.log("from navigation user", currentUser);
  console.log("from navigation cart", iscartOpen);
  // console.log("from navigation profile", isProfileOpen);

return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo" />
      </Link>
      <div className="website-header">
        <h1>Mahi Crown Clothing</h1>
      </div>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={signOutUserhandler}>
              Sign Out
            </Link>
          ) : ( 
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        {/* { currentUser && <Profile/>} */}
        </div>
      {iscartOpen && <CartDropdown />}
      {/* {isProfileOpen && <ProfileDropDown data={currentUser} />} */}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
