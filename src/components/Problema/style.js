import styled from 'styled-components';

export const Problema = styled.section`
	background-color: var(--cinza);
	padding: 2rem;

	@media screen and (min-width: 768px) {
		padding: 5rem 15%;
	}
`;

export const Div = styled.div`
	display: flex;
`;

export const Titulo = styled.h3`
	font-family: 'Arvo', serif;
	font-size: 1.5rem;
	line-height: 1.25;
	text-align: right;
	padding-bottom: 2rem;

	@media screen and (min-width: 768px) {
		font-size: 2rem;
		line-height: 1.5;
	}
`;

export const Descricao = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: 1.1rem;
	line-height: 1.5;
	text-align: justify;
`;
