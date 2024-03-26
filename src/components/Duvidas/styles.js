import styled from 'styled-components';

export const Duvidas = styled.section`
	background-color: var(--cinza);
	font-family: 'Montserrat', sans-serif;
	line-height: 1.4;
	padding: 2rem;

	@media screen and (min-width: 768px) {
		padding: 2rem 15%;
	}
`;

export const Titulo = styled.h3`
	border-bottom: 4px solid ${({ $color }) => `var(${$color})`};
	font-size: 2rem;
	font-weight: 700;
	padding-bottom: 1rem;
	text-align: center;
`;

export const Pergunta = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	margin-top: 2rem;
	text-align: justify;
`;

export const Resposta = styled.p`
	font-size: 1.1rem;
	margin-top: 1rem;
	text-align: justify;
`;
