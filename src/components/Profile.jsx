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
  height: 200px;
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 600px;
  // background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
`;

const ProfileTitle = styled.p`
color: hsl(150, 0%, 100%);
font-size: 40px!important;
font-weight: bold!important;
font-family: monospace;
letter-spacing: 7px!important;
cursor: pointer;
text-transform: uppercase;
// padding: 64px;
  background: linear-gradient(to right, hsl(150, 0%, 100%) 0, hsl(0, 0%, 30%) 10%, hsl(150, 0%, 100%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 600px;
    }
    100% {
      background-position: 600px;
    }
  }
`;

export const Profile = () => {
  return (
    <ProfileSection id="profile">
      <ProfileContainer>
        <ProfileImage src={Image} alt="Profile Image" />
        <ProfileName>Hasnain Khan</ProfileName>
        <ProfileTitle>React Native Developer</ProfileTitle>
      </ProfileContainer>
    </ProfileSection>
  );
};
