import styled from 'styled-components';

export const Header = styled.header`
	background-color: var(--laranja);
	color: var(--escuro-azul);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 1rem;

	@media screen and (min-width: 1024px) {
		align-items: center;
		flex-direction: row;
		padding: 0 10rem;
		position: sticky;
		top: 0;
	}
`;

export const HomeButton = styled.a`
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

export const NavItem = styled.li`
	box-sizing: border-box;
	color: var(--escuro-azul);
	display: inline-block;
	font-size: 1.05rem;
`;
