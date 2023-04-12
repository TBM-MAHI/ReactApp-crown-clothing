import "./profile.style.scss";
import { useContext } from "react";
import { userContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as Profileicon } from "../../assets/profile.svg";
import ProfileAvatar from "../Profile-avatar/ProfileAvatar.component";
const Profile = () => {
  let { currentUser, isProfileOpen, setisProfileOpen } =
    useContext(userContext);
  let { setIsCartOpen } = useContext(CartContext);

  const handleShowProfile = () => {
    setisProfileOpen(!isProfileOpen);
    setIsCartOpen(false);
  };
  console.log(currentUser);
  return (
    <div className="profile-picture-conatiner" onClick={handleShowProfile}>
      {currentUser.photoURL ? (
        <ProfileAvatar
          avatarURL={currentUser.photoURL}
          imgAlt={currentUser.displayName}
        />
      ) : (
        <Profileicon />
      )}
    </div>
  );
};

export default Profile;
