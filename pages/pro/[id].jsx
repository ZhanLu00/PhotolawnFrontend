import React from "react";
import Biography from "../../components/pro/Biography";
import Portfolio from "../../components/pro/Portfolio";
import TopProfile from "../../components/pro/TopProfile";

const ProfilePage = () => {
  return (
    <React.Fragment>
      <TopProfile />
      <Biography />
      <Portfolio />
    </React.Fragment>
  );
};

export default ProfilePage;
