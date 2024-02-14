import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonTemplate = styled(Link)`
	border: 2px solid var(--branco);
	border-radius: 5px;
	box-sizing: border-box;
	color: inherit;
	display: inline-block;
	font-size: 1.25rem;
	max-width: 350px;
	padding: 1rem 2rem;
	transition: 0.3s all;
	text-align: center;
	width: 100%;

	@media screen and (min-width: 1024px) {
		border-color: ${({ $color }) => `var(${$color})`};
		&:hover {
			background-color: ${({ $color }) => `var(${$color})`};
			color: var(--branco);
		}
	}
`;
