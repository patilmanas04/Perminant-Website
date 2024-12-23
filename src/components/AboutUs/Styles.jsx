import styled from "styled-components";

export const AboutUsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 800px;
  position: relative;
  padding: 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 700px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

export const AboutUsContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 17px;

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  max-width: 400px;
  letter-spacing: 6px;
  width: 100%;
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    font-size: 40px;
    max-width: 350px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    max-width: 300px;
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  max-width: 500px;
  width: 100%;
  letter-spacing: 5px;
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    font-size: 28px;
    max-width: 450px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
    max-width: 100%;
    text-align: center;
  }
`;

export const Description = styled.p`
  max-width: 580px;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: 500px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 100%;
    text-align: center;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const CTAButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const AboutUsImage = styled.img`
  width: 570.86px;
  height: auto;
  filter: opacity(0.34) blur(2px);
  position: absolute;
  z-index: 0;
  top: 0;
  right: -20px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;
