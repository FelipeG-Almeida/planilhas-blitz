import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CarroselTemplate = styled.section`
	background-color: var(--cinza);
	color: var(--escuro);
	padding: 2rem 1rem;
`;

export const Titulo = styled.h2`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	text-align: center;
	padding-bottom: 0.75rem;

	@media screen and (min-width: 1024px) {
		font-size: 2rem;
		text-align: left;
		margin-left: 3rem;
	}
`;

export const CardsDiv = styled.div`
	border-top: 1px solid var(--laranja);
	padding-top: 1rem;
	display: grid;
	grid-row-gap: 1rem;
	grid-template-columns: 100%;
	grid-template-rows: auto;

	@media screen and (min-width: 768px) {
		grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
		grid-column-gap: 1rem;
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: 32% 32% 32%;
		grid-column-gap: 1rem;
	}
`;

export const Card = styled(Link)`
	border: 1px solid var(--cinza-medio);
	background-color: var(--branco);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	display: flex;
	font-family: 'Roboto Condensed', sans-serif;
	flex-direction: column;
	transition: 0.25s all;

	&:hover {
		border: 4px solid var(--amarelo);
	}
`;

export const CardThumb = styled.img`
	margin-bottom: 0.5rem;
	max-height: 350px;
	object-fit: cover;
	object-position: top 0% right 100%;
`;

export const CardNome = styled.p`
	margin: 0.5rem 2rem;
	line-height: 1.5;
	font-size: 1.25rem;
`;

export const CardPreco = styled.p`
	margin: 1rem 2rem;
	font-size: 1.5rem;
	font-weight: 700;
`;
