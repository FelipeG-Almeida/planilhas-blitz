import styled from 'styled-components';

export const Beneficios = styled.section`
	font-family: 'Montserrat', sans-serif;
	text-align: justify;
`;

export const Item = styled.li`
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	width: calc(100% - 4rem);

	&:nth-child(odd) {
		background-color: var(--cinza);
	}

	&:nth-child(even) {
		background-image: linear-gradient(
			315deg,
			${({ $color }) => `var(${$color})`} 0%,
			#2e0f0c 74%
		);
		color: var(--branco);
	}

	&:last-child {
		background-image: linear-gradient(
			0deg,
			var(--branco) 0%,
			var(--cinza-medio) 74%
		);
	}

	@media screen and (min-width: 768px) {
		padding: 4rem 10%;
		width: 80%;
	}

	@media screen and (min-width: 1024px) {
		align-items: center;
		justify-content: space-between;

		&:nth-child(odd) {
			flex-direction: row;
		}

		&:nth-child(even) {
			flex-direction: row-reverse;
		}
	}
`;

export const Titulo = styled.h3`
	border-bottom: solid 3px ${({ $color }) => `var(${$color})`};
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.5;
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	text-align: center;
	text-transform: uppercase;
`;

export const Texto = styled.p`
	font-size: 1.1rem;
	line-height: 1.5;
	margin-bottom: 1rem;
`;

export const Img = styled.img`
	border-radius: 10px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	height: 250px;
	margin-top: 1rem;
	max-width: 740px;
	object-fit: cover;
	object-position: left top;
	width: 100%;

	@media screen and (min-width: 768px) {
		height: 350px;
	}

	@media screen and (min-width: 1024px) {
		width: 50%;
	}
`;

export const Gif = styled.img`
	border-radius: 10px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	height: 250px;
	margin-top: 1rem;
	max-width: 740px;
	object-position: left top;
	width: 100%;

	@media screen and (min-width: 768px) {
		height: 350px;
	}

	@media screen and (min-width: 1024px) {
		width: 50%;
	}
`;

export const Container = styled.div`
	@media screen and (min-width: 1024px) {
		width: 45%;
	}
`;

export const Caracteristica = styled.li`
	background-position: top 0 left 50%;
	background-repeat: no-repeat;
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.75;
	margin-bottom: 1rem;
	padding-top: 10px;
	text-align: center;
`;
