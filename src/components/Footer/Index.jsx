import { footerContent, socialMediaLinks } from "../../data/constants";
import RightArrow from "../icons/RightArrow";
import {
  FooterWrapper,
  FooterContainer,
  FooterMain,
  LeftPart,
  Logo,
  ContactDetails,
  ContactDetail,
  Icon,
  Title,
  RightPart,
  QuickLinks,
  QuickLinksTitle,
  QuickLink,
  QuickLinkIcon,
  Anchor,
  Divider,
  FooterBottom,
  SocialMediaLinks,
  SocialMediaLink,
  Copyright,
} from "./Styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMain>
          <LeftPart>
            <Logo>{footerContent.logo}</Logo>
            <ContactDetails>
              {footerContent.contactDetails.map((contactDetail, index) => {
                return (
                  <ContactDetail key={index}>
                    <Icon>{contactDetail.icon}</Icon>
                    <Title>{contactDetail.title}</Title>
                  </ContactDetail>
                );
              })}
            </ContactDetails>
          </LeftPart>
          <RightPart>
            <QuickLinksTitle>{footerContent.quickLinks.title}</QuickLinksTitle>
            <QuickLinks>
              {footerContent.quickLinks.links.map((link, index) => {
                return (
                  <QuickLink>
                    <QuickLinkIcon>
                      <RightArrow />
                    </QuickLinkIcon>
                    <Anchor href={link.href}>{link.name}</Anchor>
                  </QuickLink>
                );
              })}
            </QuickLinks>
            <SocialMediaLinks className="footer-main-social-media-links">
              {socialMediaLinks.map((socialMediaLink, index) => {
                return (
                  <SocialMediaLink
                    key={index}
                    href={socialMediaLink.url}
                    target="_blank"
                  >
                    {socialMediaLink.icon}
                  </SocialMediaLink>
                );
              })}
            </SocialMediaLinks>
          </RightPart>
        </FooterMain>
        <Divider></Divider>
        <FooterBottom>
          <Copyright>{footerContent.copyright}</Copyright>
          <SocialMediaLinks>
            {socialMediaLinks.map((socialMediaLink, index) => {
              return (
                <SocialMediaLink
                  key={index}
                  href={socialMediaLink.url}
                  target="_blank"
                >
                  {socialMediaLink.icon}
                </SocialMediaLink>
              );
            })}
          </SocialMediaLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
