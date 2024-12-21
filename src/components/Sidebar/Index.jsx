import {
  SidebarWrapper,
  SidebarMenu,
  SidebarMenuItem,
  Anchor,
  SocialMediaLinks,
  SocialMediaLink,
} from "./Styles";
import { socialMediaLinks } from "../../data/constants";

const Sidebar = ({ openMobileMenu }) => {
  return (
    <SidebarWrapper className={openMobileMenu ? "active" : ""}>
      <SidebarMenu>
        <SidebarMenuItem>
          <Anchor>Home</Anchor>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Anchor>About us</Anchor>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Anchor>Services</Anchor>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Anchor>Projects</Anchor>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Anchor>Contact</Anchor>
        </SidebarMenuItem>
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
