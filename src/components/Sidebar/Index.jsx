import {
  SidebarWrapper,
  SidebarMenu,
  SidebarMenuItem,
  Anchor,
  SocialMediaLinks,
  SocialMediaLink,
} from "./Styles";
import { socialMediaLinks } from "../../data/constants";

const Sidebar = ({ openMobileMenu, setOpenMobileMenu, activeSection }) => {
  return (
    <SidebarWrapper className={openMobileMenu ? "active" : ""}>
      <SidebarMenu>
        <Anchor href="#home" onClick={() => setOpenMobileMenu(false)}>
          {" "}
          <SidebarMenuItem className={activeSection === "home" ? "active" : ""}>
            Home
          </SidebarMenuItem>
        </Anchor>
        <Anchor href="#about" onClick={() => setOpenMobileMenu(false)}>
          {" "}
          <SidebarMenuItem
            className={activeSection === "about" ? "active" : ""}
          >
            About us
          </SidebarMenuItem>
        </Anchor>
        <Anchor href="#services" onClick={() => setOpenMobileMenu(false)}>
          <SidebarMenuItem
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </SidebarMenuItem>
        </Anchor>
        <Anchor href="#contact" onClick={() => setOpenMobileMenu(false)}>
          <SidebarMenuItem
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </SidebarMenuItem>
        </Anchor>
      </SidebarMenu>
      <SocialMediaLinks>
        {socialMediaLinks.map((link, index) => {
          return (
            <SocialMediaLink key={index} href={link.url}>
              {link.icon}
            </SocialMediaLink>
          );
        })}
      </SocialMediaLinks>
    </SidebarWrapper>
  );
};

export default Sidebar;
