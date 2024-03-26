import styled from 'styled-components';

export const Solucao = styled.section`
	background-image: linear-gradient(
		315deg,
		${({ $color }) => `var(${$color})`} 0%,
		#2e0f0c 74%
	);
	font-family: 'Montserrat', sans-serif;
	padding: 2rem;

	@media screen and (min-width: 768px) {
		padding: 2rem 15%;
	}
`;

export const Texto = styled.p`
	color: var(--branco);
	font-size: 1.1rem;
	line-height: 1.5;
	margin-bottom: 3rem;
	text-align: justify;
`;

export const Lista = styled.ul`
	display: grid;
	grid-gap: 1.5rem;
	justify-items: center;
	text-align: center;

	@media screen and (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const Item = styled.li`
	background-color: var(--branco);
	background-image: url(${(props) => props.$icon});
	background-position: top 20% right 50%;
	background-repeat: no-repeat;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
	border-radius: 15px;
	font-family: 'Roboto Condensed', sans-serif;
	font-size: 1.5rem;
	font-weight: 700;
	max-width: 300px;
	padding: 8rem 1.5rem 1.5rem 1.5rem;
	width: calc(100% - 3rem);
`;

export const Titulo = styled.h3`
	color: var(--branco);
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.5;
	margin: 2rem 0;
`;
