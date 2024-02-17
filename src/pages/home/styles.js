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

export const Diferenciais = styled.section`
	background-color: var(--amarelo);
	color: var(--escuro);
	font-family: 'Montserrat', sans-serif;
	line-height: 1.35;
	padding: 2.5rem 1.5rem;
	text-align: justify;

	@media screen and (min-width: 1024px) {
		padding: 2.5rem 15%;
	}
`;

export const DiferenciaisTitulo = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0;
	text-align: center;
`;

export const DiferenciaisItens = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;

	@media screen and (min-width: 768px) {
		justify-content: space-around;
	}
`;

export const DiferenciaisItem = styled.li`
	background-image: ${({ $icon }) => `url(${$icon})`};
	background-position: top 2.5rem left 0.5rem;
	background-repeat: no-repeat;
	padding-left: 5rem;
	max-width: 250px;
`;

export const DiferenciaisNome = styled.h2`
	font-size: 1.2rem;
	font-weight: 700;
	margin-top: 3rem;
`;

export const DiferenciaisTexto = styled.p`
	margin-top: 1rem;

	@media screen and (min-width: 1024px) {
		font-size: 1.2rem;
	}
`;
