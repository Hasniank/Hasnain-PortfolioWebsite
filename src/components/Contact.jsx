import React from "react";
import styled from "styled-components";

// Import the images
import userIcon from "../../public/images/user.png";
import emailIcon from "../../public/images/email.png";
import messageIcon from "../../public/images/message.png";

const ContactSection = styled.section`
  background-color: #f9f9f9;
  padding: 80px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InputIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 30px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
  color:#FFF
  &:focus {
    border-color: #555;
  }
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px 30px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;

  &:focus {
    border-color: #555;
  }
`;

const FormButton = styled.button`
  padding: 12px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #555;
  }
`;

export const Contact = () => {
  return (
    <ContactSection>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <FormGroup>
          <InputIcon src={userIcon} alt="user" />
          <FormInput type="text" placeholder="Name" required />
        </FormGroup>
        <FormGroup>
          <InputIcon src={emailIcon} alt="email" />
          <FormInput type="email" placeholder="Email" required />
        </FormGroup>
        <FormGroup>
          <InputIcon src={messageIcon} alt="message" />
          <FormTextArea placeholder="Message" rows="6" required />
        </FormGroup>
        <FormButton type="submit">Send Message</FormButton>
      </ContactForm>
    </ContactSection>
  );
};

