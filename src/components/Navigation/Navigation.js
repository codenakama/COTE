import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledLinkButton } from '../atoms/Button/Button';

const NavButton = StyledLinkButton.extend`
  @media screen and (max-width: 640px) {
    border: none !important;
    padding: 0;
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 640px) {
    width: 140px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 3.43em;
  background-color: #fff;
  max-width: ${props => (props.maxWidth ? props.maxWidth : '928px')};
  margin: 0 auto;
  @media only screen and (max-width: 960px) {
    margin: 0 40px;
  }
  @media only screen and (max-width: 40em) {
    margin: 0 1em;
  }

  @media screen and (max-width: 640px) {
    height: 56px;
  }
`;
const NavLeft = styled.div``;

const NavRight = styled.div`
  button,
  a {
    margin-right: 1em;
  }

  & a:last-child,
  & button:last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Navigation = ({ logo, items, ...props }) => {
  return (
    <Container>
      <Nav {...props}>
        <NavLeft>
          <Logo src={logo} alt="logo" />
        </NavLeft>
        <NavRight>
          {items.map((item, i) => {
            return (
              <NavButton key={`n-${i}`} href={item.url} onClick={item.onClick}>
                {item.title}
              </NavButton>
            );
          })}
        </NavRight>
      </Nav>
    </Container>
  );
};

Navigation.propTypes = {
  /** Url path to the logo/brand image */
  logo: PropTypes.string,
  /** Array with the navigation items */
  items: PropTypes.array,
  /** Max width that the nav can extend to */
  maxWidth: PropTypes.number
};

Navigation.defaultProps = {
  logo: 'http://via.placeholder.com/222x40',
  items: [
    {
      url: 'http://google.com',
      title: 'Nav item 1'
    },
    {
      url: 'http://google.com',
      title: 'Nav item 2'
    }
  ]
};

export default Navigation;
