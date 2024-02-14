import { useLocation } from 'react-router-dom';
import * as S from './styles';

function Header() {
	const paginaAtual = useLocation();
	return (
		<S.Header>
			<S.HomeButton to="/">
				<S.Logo src="/logo.png" alt="" />
				<h2>Planilhas Blitz</h2>
			</S.HomeButton>
			<nav>
				<ul>
					<S.NavItem $ativo={paginaAtual.pathname === '/'}>
						<S.NavbarLink to="/">Início</S.NavbarLink>
					</S.NavItem>
					<S.NavItem $ativo={paginaAtual.pathname === '/planilhas'}>
						<S.NavbarLink to="/planilhas">Planilhas</S.NavbarLink>
					</S.NavItem>
					<S.NavItem $ativo={paginaAtual.pathname === '/sobre'}>
						<S.NavbarLink to="/sobre">Sobre</S.NavbarLink>
					</S.NavItem>
					<S.NavItem $ativo={paginaAtual.pathname === '/contato'}>
						<S.NavbarLink to="/contato">Contato</S.NavbarLink>
					</S.NavItem>
				</ul>
			</nav>
		</S.Header>
	);
}

export default Header;
