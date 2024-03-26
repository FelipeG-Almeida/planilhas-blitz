import styled from 'styled-components';

export const Oferta = styled.section`
	font-family: 'Montserrat', sans-serif;
	padding: 2rem;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding: 2rem 15%;
	}
`;

export const Img = styled.img`
	height: 350px;
	margin-bottom: 2rem;
	max-width: 800px;
	object-fit: cover;
	object-position: top 0 right 0;
	width: 100%;

	@media screen and (min-width: 768px) {
		height: auto;
	}
`;

export const Preco = styled.h4`
	font-size: 1.8rem;
	margin-bottom: 1rem;
	text-decoration: line-through;
`;

export const Desconto = styled.h4`
	font-size: 1.8rem;
	font-weight: 700;
	margin-bottom: 2rem;
`;

export const Texto = styled.p`
	font-size: 1.2rem;
	line-height: 1.5;
	margin-bottom: 2rem;

	@media screen and (min-width: 768px) {
		font-size: 1.4rem;
	}
`;
