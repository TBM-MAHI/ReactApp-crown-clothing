import "./ProfileDropDown.styels.scss";
import Button from "../Button/Button.comp";


const ProfileDropDown = ({ data }) => {
  let { email, displayName } = data;
  return (
    <div className="profile-dropdown-container">
      <div className="profile-menus">
        <div className="header">User Profile</div>
        <div className="name">
          {displayName}
        </div>
        <div className="email">
         {email}
              </div>
            <Button>update-Profile</Button>
       
      </div>
    </div>
  );
};

export default ProfileDropDown;
