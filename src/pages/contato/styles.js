import styled from 'styled-components';

export const Contato = styled.section`
	color: var(--escuro-azul);
	display: flex;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	padding: 2rem;

	@media screen and (min-width: 768px) {
		padding: 3rem 15%;
	}

	@media screen and (min-width: 1024px) {
		column-gap: 1rem;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

export const Cabecalho = styled.div`
	width: 100%;
`;

export const Titulo = styled.h1`
	font-size: 1.75rem;
	font-weight: 700;
	line-height: 1.25;
	text-align: center;

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}
`;

export const Texto = styled.p`
	background-repeat: no-repeat;
	background-position: top 50% right 100%;
	font-size: 1.1rem;
	line-height: 1.5;
	padding: 1rem 0;
	text-align: left;
`;

export const IconDiv = styled.div`
	align-items: center;
	column-gap: 15px;
	display: flex;
`;

export const Container = styled.div`
	background-color: var(--amarelo);
	border-radius: 5px;
	padding: 0 1rem;

	@media screen and (min-width: 1024px) {
		width: calc(50% - 2rem);
	}
`;

export const FormContainer = styled.div`
	@media screen and (min-width: 1024px) {
		width: calc(50% - 2rem);
	}
`;

export const SubTitulo = styled.h2`
	font-size: 1.25rem;
	font-weight: 700;
	margin-top: 1rem;
	line-height: 1.5;
`;

export const Formulario = styled.form`
	font-family: 'Arvo', sans-serif;
`;

export const Label = styled.label`
	display: inline-block;
	font-weight: 700;
	margin-top: 1rem;
`;

export const Input = styled.input`
	border: none;
	border-bottom: 2px solid var(--amarelo);
	display: inline-block;
	font-family: 'Montserrat', sans-serif;
	font-size: 0.9rem;
	outline: none;
	padding: 1rem 0;
	width: 100%;
`;

export const Select = styled.select`
	border: none;
	border-bottom: 2px solid var(--amarelo);
	display: inline-block;
	font-family: 'Montserrat', sans-serif;
	font-size: 0.9rem;
	outline: none;
	padding: 1rem 0;
	width: 100%;
`;

export const Mensagem = styled.textarea`
	border: 2px solid var(--amarelo);
	border-radius: 5px;
	font-family: 'Montserrat', sans-serif;
	margin-top: 1rem;
	outline: none;
	padding: 1rem;
	width: calc(100% - 2.25rem);
`;

export const Enviar = styled.input`
	background-color: var(--amarelo);
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-family: 'Arvo', serif;
	font-size: 100%;
	margin-top: 1rem;
	padding: 1rem;
	transition: 0.5s all;
	width: 100%;

	&:hover {
		background-color: var(--laranja);
		transform: scale(1.01);
	}
`;
