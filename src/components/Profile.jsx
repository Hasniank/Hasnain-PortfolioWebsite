import React from "react";
import styled from "styled-components";
import Image from "../../public/images/profile.png";

const ProfileSection = styled.section`
  // background-color: #f9f9f9;
  //   padding: 100px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px; /* Increase the height */
`;

const ProfileContainer = styled.div`
  width: 100%; /* Increase the width */
  height: 600px; /* Increase the height */
  // background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
`;

const ProfileTitle = styled.p`
  font-size: 18px;
  color: #fff;
`;

export const Profile = () => {
  return (
    <ProfileSection>
      <ProfileContainer>
        <ProfileImage src={Image} alt="Profile Image" />
        <ProfileName>Hasnain Khan</ProfileName>
        <ProfileTitle>React Native Developer</ProfileTitle>
      </ProfileContainer>
    </ProfileSection>
  );
};
