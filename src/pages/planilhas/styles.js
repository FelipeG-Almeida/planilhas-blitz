import styled from 'styled-components';

export const Cabecalho = styled.section`
	color: var(--escuro-azul);
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	padding: 1rem;

	@media screen and (min-width: 768px) {
		padding: 2rem 10%;
		text-align: left;
		background-image: url(/planilhas.jpg);
		background-size: 40%;
		background-repeat: no-repeat;
		background-position: top 50% right 0%;
	}

	@media screen and (min-width: 1024px) {
		background-size: contain;
		background-position: top 50% right 20%;
	}
`;

export const Titulo = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	line-height: 1.25;
	margin: 1rem 0;

	@media screen and (min-width: 768px) {
		width: 65%;
	}

	@media screen and (min-width: 1024px) {
		width: 50%;
		font-size: 2rem;
	}
`;

export const Texto = styled.p`
	font-size: 1.1rem;
	line-height: 1.5;

	@media screen and (min-width: 768px) {
		width: 65%;
	}

	@media screen and (min-width: 1024px) {
		width: 50%;
	}
`;

export const Sugestao = styled.section`
	background-color: var(--amarelo);
	display: flex;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	align-items: center;
	padding: 1rem;
	row-gap: 1rem;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding: 3rem 15%;
	}
`;

export const SugestaoTitulo = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.25;
	margin-bottom: 1rem;
`;

export const SugestaoTexto = styled.p`
	font-size: 1.2rem;
	line-height: 1.5;
`;
