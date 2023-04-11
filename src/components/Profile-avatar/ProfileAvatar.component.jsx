import './profileAvatar.styles.scss';

const ProfileAvatar = ({ avatarURL, imgAlt }) => {
  return (
    <div className="profile-avatar-container">
      <img src={avatarURL} alt={imgAlt} />
    </div>
  );
};

export default ProfileAvatar;
