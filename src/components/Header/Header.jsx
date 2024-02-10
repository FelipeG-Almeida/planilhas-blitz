// import { Link } from 'react-router-dom';
import * as S from './styles';

function Header() {
	return (
		<S.Header>
			<S.HomeButton>
				<S.Logo src="/logo.png" alt="" />
				<h2>Planilhas Blitz</h2>
			</S.HomeButton>
			<nav>
				<ul>
					<S.NavItem>Início</S.NavItem>
					<S.NavItem>Planilhas</S.NavItem>
					<S.NavItem>Sobre</S.NavItem>
					<S.NavItem>Contato</S.NavItem>
				</ul>
			</nav>
		</S.Header>
	);
}

export default Header;
