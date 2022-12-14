import React, { useEffect } from "react";
import styled from "styled-components";

export const Navbar = () => {
  const stickyNavbar = () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
  }, []);

  return (
    <Header>
      <Nav>
        <a href="#" className="logo">
          Cyl<span>exx</span>
        </a>
        <LinkContainer>
          <LinkUl>
            <li>
              <Link href="#">
                Acceuil
              </Link>
            </li>
            <li>
              <Link href="#">
                Article
              </Link>
            </li>
            <li>
              <Link href="#">
                A propos{" "}
              </Link>
            </li>
            <li>
              <Link href="#">
                Contact
              </Link>
            </li>
          </LinkUl>
        </LinkContainer>
      </Nav>
    </Header>
  );
};

const Header = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: 0.3s;
  &.scrolled{
    background-color: var(--bg-color-trsprt);
    box-shadow: 0 5px 20px 0.1px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
  }
`
/** 
const Headerscoll = styled(Header)`
  background-color: var(--bg-color-trsprt);
    box-shadow: 0 5px 20px 0.1px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
`*/
const Nav = styled("nav")`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const LinkContainer = styled("div")`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const LinkUl = styled("ul")`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Link = styled("a")`
    position: relative;
    display: inline-block;
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    color: var(--text-color);
    font-weight: 500;
    opacity: 0.9;
    transition: 0.3s;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: var(--main-color-1);
    bottom: 0;
    left: -5px;
    opacity: 0;
    transition: 0.3s;
  }

  :hover {
    color: white;
  }

  :hover::after {
    width: 100%;
    opacity: 0.2;
  }
`;