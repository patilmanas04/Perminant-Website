import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBg};
  padding: 40px;
  grid-area: footer;

  @media screen and (max-width: 615px) {
    padding: 30px 20px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FooterMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 615px) {
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
`;

export const Logo = styled.div`
  height: 40px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactDetail = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 300;
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuickLinksTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 20px 0 0 0;
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  transition: color 0.2s ease-in-out;
`;

export const QuickLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  &:hover ${Anchor} {
    color: ${({ theme }) => theme.colors.primaryAccent} !important;
  }
`;

export const QuickLinkIcon = styled.div`
  width: 15px;
  height: 15px;
`;

export const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 17px;
  list-style: none;

  &.footer-main-social-media-links {
    display: none;
    margin-top: 20px;

    @media screen and (max-width: 615px) {
      display: flex;
    }
  }

  @media screen and (max-width: 615px) {
    display: none;
  }
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  width: 25px;
  height: 25px;
  -webkit-tap-highlight-color: transparent;

  svg {
    fill: ${({ theme }) => theme.colors.secondary};
    transition: all 0.2s ease;

    path {
      fill: ${({ theme }) => theme.colors.secondary};
      transition: all 0.2s ease;
    }
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.primaryAccent};

    path {
      fill: ${({ theme }) => theme.colors.primaryAccent};
    }
  }
`;
