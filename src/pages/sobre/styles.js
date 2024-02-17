import styled from 'styled-components';

export const Cabecalho = styled.section`
	background: linear-gradient(180deg, var(--laranja) 30%, var(--cinza) 30%);
	color: var(--escuro-azul);
	font-family: 'Montserrat', sans-serif;
	padding: 2rem;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding: 2rem 15%;
	}
`;

export const Logo = styled.img`
	background-color: var(--cinza);
	border-radius: 100%;
	width: 190px;
`;

export const Titulo = styled.h1`
	font-size: 1.75rem;
	font-weight: 700;
	line-height: 1.25;
	margin-top: 2rem;

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
`;

export const Texto = styled.p`
	font-size: 1.3rem;
	line-height: 1.5;
	margin-top: 2rem;

	@media screen and (min-width: 768px) {
		font-size: 1.5rem;
	}
`;

.sobre__conteudo {
	align-items: center;
	background-color: var(--cinza);
	display: flex;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	padding: 2rem;
}

.sobre__conteudo--titulo {
	background-repeat: no-repeat;
	background-position: left 50% top 25%;
	font-size: 1.5rem;
	font-weight: 700;
	padding-top: 8rem;
	text-align: center;
}
