import styled from 'styled-components';

export const Chamada = styled.section`
	background-color: var(--laranja);
	color: var(--escuro-azul);
	font-family: 'Montserrat', sans-serif;

	@media screen and (min-width: 1024px) {
		background-color: var(--cinza);
		background-image: url(/banner.svg);
		background-size: contain;
		background-position: right;
		background-repeat: no-repeat;
	}
`;

export const ChamadaTexto = styled.div`
	padding: 2rem 2rem;
	text-align: center;

	@media screen and (min-width: 1024px) {
		width: 55%;
		padding: 3rem 3rem;
	}
`;

export const ChamadaTitulo = styled.h1`
	font-size: 1.75rem;
	font-weight: 700;
	line-height: 1.25;
	margin-bottom: 1rem;

	@media screen and (min-width: 1024px) {
		font-size: 3rem;
	}
`;

export const ChamadaDescricao = styled.p`
	font-size: 1.25rem;
	line-height: 1.5;
	margin-bottom: 1rem;
`;
