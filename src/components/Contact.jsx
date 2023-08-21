import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { db } from "../Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const ContactSection = styled.section`
  padding: 80px;
  text-align: center;
`;

const ContactContainer = styled.div``;

const ContactTitle = styled.h2`
color: hsl(150, 0%, 100%);
font-size: 30px!important;
font-weight: bold!important;
font-family: monospace;
letter-spacing: 7px!important;
cursor: pointer;
text-transform: uppercase;

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

const ContactForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #fff;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(52, 52, 52, 0.8);
  color: #fff;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(52, 52, 52, 0.8);
  color: #fff;
`;

const SubmitButton = styled.button`
  background-color: #194d33;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #031e1e;
  }
`;

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // // try {
    // //   const docRef = await addDoc(collection(db, "contact"), {
    // //     name: name,
    // //     email: email,
    // //     message: message,
    // //   });
    // //   console.log("Document written with ID: ", docRef.id);
    // // } catch (e) {
    // //   console.error("Error adding document: ", e);
    // // }
    // const serviceId = "service_w0qptqa";
    // const templateId = "template_iax56uo";
    // // try {
    // //   setLoading(true);
    // //   await emailjs.send(serviceId, templateId, {
    // //     name: nameRef.current.value,
    // //     recipient: emailRef.current.value,
    // //   });
    // //   alert("email successfully sent check inbox");
    // // } catch (error) {
    // //   console.log(error);
    // // } finally {
    // //   setLoading(false);
    // // }

    e.preventDefault();


    emailjs
      .sendForm(
        "service_w0qptqa",
        "template_iax56uo",
        formRef.current,
        "HyibCht78eJy9UgHk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact</ContactTitle>
        <ContactForm  ref={formRef} onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Your Name</FormLabel>
            <FormInput
              type="text"
              placeholder="Enter your name"
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Your Email</FormLabel>
            <FormInput
              type="email"
              placeholder="Enter your email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Your Message</FormLabel>
            <FormTextarea
              placeholder="Enter your message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></FormTextarea>
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};
