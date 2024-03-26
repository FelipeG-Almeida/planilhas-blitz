import styled from 'styled-components';

export const Headline = styled.section`
	align-items: center;
	background-image: linear-gradient(
		315deg,
		${({ $color }) => `var(${$color})`} 0%,
		#2e0f0c 74%
	);
	display: flex;
	color: var(--branco);
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	line-height: 1.5;
	padding: 2rem;
	text-align: center;

	@media screen and (min-width: 768px) {
		background-image: ${({ $background }) => `url(${$background})`};
		background-position: center;
		background-size: cover;
		flex-direction: row;
		justify-content: space-evenly;
		text-align: left;
	}
`;

export const HeadlineTexto = styled.div`
	@media screen and (min-width: 768px) {
		width: 50%;
	}
`;

export const HeadlineTitulo = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.25;
	margin-bottom: 1.5rem;

	@media screen and (min-width: 768px) {
		font-size: 2rem;
	}
`;

export const HeadlineSubtitulo = styled.h3`
	font-size: 1.25rem;
	margin-bottom: 1rem;
`;

export const HeadlineKeywords = styled.p`
	font-size: 0.8rem;
	margin-top: 1rem;
`;

export const HeadlineImg = styled.img`
	margin-top: 2rem;
	width: 90%;
	max-width: 350px;
`;
