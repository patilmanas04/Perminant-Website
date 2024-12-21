import { socialMediaLinks } from "../../data/constants";
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarLogo,
  SocialMediaLinks,
  SocialMediaLink,
  MenuIcon,
} from "./Styles";
import LogoWhite from "../icons/LogoWhite";
import Menu from "../icons/Menu";
import Close from "../icons/Close";

const Navbar = ({ openMobileMenu, setOpenMobileMenu }) => {
  const toggleMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLogo>
          <LogoWhite />
        </NavbarLogo>
        <SocialMediaLinks>
          {socialMediaLinks.map((link, index) => {
            return (
              <SocialMediaLink key={index} href={link.url}>
                {link.icon}
              </SocialMediaLink>
            );
          })}
        </SocialMediaLinks>
        <MenuIcon onClick={toggleMenu}>
          {openMobileMenu ? <Close /> : <Menu />}
        </MenuIcon>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
