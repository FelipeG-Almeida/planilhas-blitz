import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
	align-items: center;
	background-color: var(--laranja);
	color: var(--escuro-azul);
	display: flex;
	flex-direction: column;
	font-family: 'Arvo', serif;
	justify-content: space-between;
	padding-top: 1rem;
	z-index: 999;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		padding: 0 10rem;
		position: sticky;
		top: 0;
	}
`;

export const HomeButton = styled(Link)`
	align-items: center;
	display: flex;
	font-size: 1.5rem;
	justify-content: center;
	text-decoration: none;
`;

export const Logo = styled.img`
	margin-right: 2rem;
	width: 42px;
`;

export const NavBar = styled.nav`
	text-align: center;
`;

export const NavList = styled.ul`
	display: flex;
	gap: 4px;
`;

export const NavItem = styled.li`
	box-sizing: border-box;
	color: var(--escuro-azul);
	display: inline-block;
	font-size: 1.05rem;
	
	&:hover {
		border-bottom: 4px solid var(--escuro-azul);
	}
	${({ $ativo }) =>
		$ativo &&
		`
    border-bottom: 4px solid var(--escuro-azul);
  `}
`;

export const NavbarLink = styled(Link)`
	display: block;
	padding: calc(1.5rem - 5px) 1rem;
`;
