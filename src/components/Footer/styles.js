import styled from 'styled-components';

export const Template = styled.footer`
	background-color: var(--escuro);
	color: var(--branco);
	display: flex;
	flex-direction: column;
	padding: 1.5rem 1rem;
	text-align: center;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 1.5rem 5%;
	}
`;

export const Titulo = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-family: 'Arvo', serif;
	font-size: 2rem;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
	}
`;

export const Logo = styled.img`
	margin: 0 1.5rem;
	width: 90px;
`;

export const Texto = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.15rem;
	font-weight: 700;
	margin: 1.5rem 0;
`;

export const Midia = styled.li`
	display: inline;
	margin-right: 20px;
`;

export const Mapa = styled.li`
	display: inline-block;
	font-family: 'Arvo', serif;
	margin: 1rem;

	@media screen and (min-width: 1024px) {
		display: block;
		text-align: left;
	}
`;
