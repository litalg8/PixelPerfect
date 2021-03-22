import React from 'react';
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        How we work
      </a>
      <a href="/">
       Blog
        </a>
      <a href="/">
        Account
        </a>
        <button><a>View Plans</a></button>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;