import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 800px;
  position: relative;
`;

export const HeroSectionContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 17px;
`;

export const Title = styled.h1`
  max-width: 400px;
  letter-spacing: 6px;
  width: 100%;
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Subtitle = styled.h2`
  max-width: 500px;
  width: 100%;
  letter-spacing: 5px;
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.p`
  max-width: 580px;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
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
`;

export const HeroSectionImage = styled.img`
  height: 100%;
  filter: opacity(0.34) drop-shadow(0 0 0 #3f0145) blur(2px);
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
`;
