import styled from "styled-components";

export const OurExpertiseWrapper = styled.section`
  padding: 60px 0;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  letter-spacing: 6px;
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primaryAccent};
`;

export const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Service = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;

  &.content-right {
    justify-content: flex-end;
  }

  @media screen and (max-width: 480px) {
    justify-content: center !important;
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  max-width: 560px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 17px;
  z-index: 1;
  padding: 20px;
`;

export const ServiceTitle = styled.h2`
  letter-spacing: 6px;
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  border-left: 5px solid ${({ theme }) => theme.colors.primaryAccent};
  padding-left: 10px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ServiceSubtitle = styled.h2`
  width: 100%;
  letter-spacing: 5px;
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ServiceDescription = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ServiceImageLeft = styled.img`
  height: auto;
  width: 570px;
  filter: opacity(0.7) drop-shadow(0 0 0 #000000) blur(2px);
  position: absolute;
  z-index: 0;
  top: 0;
  left: -20px;
  object-fit: cover;
  object-position: center;
`;

export const ServiceImageRight = styled.img`
  width: 570px;
  height: auto;
  filter: opacity(0.7) drop-shadow(0 0 0 #000000) blur(2px);
  position: absolute;
  z-index: 0;
  top: 0;
  right: -20px;
  object-fit: cover;
  object-position: center;
`;
