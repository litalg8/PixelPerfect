import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right:0;
  transition: transform 0.3s ease-in-out;
  


  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 700;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    :first-child{
      padding-top:3rem; 
  }
`;