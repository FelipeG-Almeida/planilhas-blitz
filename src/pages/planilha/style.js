import styled from 'styled-components';

export const Main = styled.main`
	span {
		color: ${({ $color }) => `var(${$color})`};
		font-weight: 700;
	}
`;
