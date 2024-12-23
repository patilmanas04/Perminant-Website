import styled from "styled-components";
import { contactUsContent } from "../../data/constants";

export const ContactUsWrapper = styled.section`
  width: 100%;
  min-height: 1100px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 60px 40px;
  background-image: url(${contactUsContent.contact_bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left -32px;

  @media screen and (max-width: 1300px) {
    min-height: 1000px;
    background-position: center;
    padding: 40px 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
    padding-bottom: 60px;
  }
`;

export const Title = styled.h1`
  max-width: 800px;
  width: 100%;
  letter-spacing: 6px;
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 auto 170px auto;
  text-align: center;

  @media screen and (max-width: 1300px) {
    margin-bottom: 130px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin: 0 auto 150px auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primaryAccent};
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    gap: 100px;
  }

  @media screen and (max-width: 1040px) {
    gap: 50px;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  gap: 20px;

  @media screen and (max-width: 1300px) {
    align-self: center;
    order: 2;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  @media screen and (max-width: 1040px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 1px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

export const ContactTitle = styled.h3`
  font-size: 14px;
`;

export const ContactDetailText = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

export const ContactForm = styled.form`
  max-width: 510px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContactField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.inputField};
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const InputTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.inputField};
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
  }
`;
