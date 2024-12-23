import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 100%;
  padding: 40px 20px;
  max-height: calc(100vh - 80px);
  position: sticky;
  top: 80px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: sidebar;
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 880px) {
    position: fixed;
    right: -100%;
    flex-direction: column;
    transition: right 0.2s ease-in-out;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    padding-top: 80px;
  }

  &.active {
    right: 0;
  }

  @media screen and (max-width: 480px) {
    top: 50px;
    max-height: calc(100vh - 50px);
  }
`;

export const SidebarMenu = styled.ul`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
`;

export const SidebarMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
  }
`;

export const Anchor = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-size: 24px;
  transition: color 0.3s;
`;

export const SocialMediaLinks = styled.div`
  gap: 20px;
  list-style: none;
  display: none;
  margin-top: 80px;

  @media screen and (max-width: 880px) {
    display: flex;
  }
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

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
