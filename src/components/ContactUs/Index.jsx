import { useRef, useState } from "react";
import { contactUsContent } from "../../data/constants";
import {
  ContactUsWrapper,
  Title,
  Span,
  ContactContainer,
  ContactDetails,
  ContactDetail,
  ContactIcon,
  ContactInformation,
  ContactTitle,
  ContactDetailText,
  ContactForm,
  Row,
  ContactField,
  InputLabel,
  InputField,
  InputTextarea,
  SubmitButton,
} from "./Styles";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const ContactUs = ({ contactRef }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tqijgym",
        "template_39h644l",
        form.current,
        "PqJx_9YaTPewypuk_"
      )
      .then(
        (result) => {
          form.current.reset();
          setOpenSnackbar(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactUsWrapper id="contact" ref={contactRef}>
      <Title>
        Have a project in mind? Let&apos;s make it <Span>happen</Span>!
      </Title>
      <ContactContainer>
        <ContactDetails>
          {contactUsContent.contactDetails.map((contactDetail, index) => {
            return (
              <ContactDetail key={index}>
                <ContactIcon>{contactDetail.icon}</ContactIcon>
                {/* <Divider></Divider> */}
                <ContactInformation>
                  <ContactTitle>{contactDetail.title}</ContactTitle>
                  {contactDetail.details.map((detail, index) => {
                    return (
                      <ContactDetailText key={index}>
                        {detail}
                      </ContactDetailText>
                    );
                  })}
                </ContactInformation>
              </ContactDetail>
            );
          })}
        </ContactDetails>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <Row>
            <ContactField>
              <InputLabel>First name</InputLabel>
              <InputField
                type="text"
                placeholder="First name"
                name="firstName"
                required
              />
            </ContactField>
            <ContactField>
              <InputLabel>Last name</InputLabel>
              <InputField
                type="text"
                placeholder="Last name"
                name="lastName"
                required
              />
            </ContactField>
          </Row>
          <ContactField>
            <InputLabel>Email</InputLabel>
            <InputField
              type="email"
              placeholder="you@company.com"
              name="email"
              required
            />
          </ContactField>
          <ContactField>
            <InputLabel>Phone number</InputLabel>
            <InputField
              type="text"
              placeholder="Your phone number"
              name="phoneNumber"
              required
            />
          </ContactField>
          <ContactField>
            <InputLabel>Message</InputLabel>
            <InputTextarea
              type="text"
              placeholder="Leave us a message..."
              name="message"
            />
          </ContactField>
          <SubmitButton type="submit">Send message</SubmitButton>
        </ContactForm>
      </ContactContainer>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        message="Thank You for Your Message! We will get back to you soon."
        onClose={() => setOpenSnackbar(false)}
      />
    </ContactUsWrapper>
  );
};

export default ContactUs;
