import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 80px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  grid-area: navbar;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLogo = styled.div`
  height: 40px;
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  width: 30px;
  height: 30px;
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

export const MenuIcon = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 880px) {
    display: block;
  }
`;
