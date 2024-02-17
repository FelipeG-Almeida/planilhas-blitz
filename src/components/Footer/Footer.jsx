import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<S.Template>
			<S.Titulo>
				<S.Logo src="/logo.png" alt="" />
				<h3>Planilhas Blitz</h3>
			</S.Titulo>
			<nav>
				<ul>
					<li>
						<S.Texto>MAPA DO SITE</S.Texto>
					</li>
					<S.Mapa>
						<Link to="/">Início</Link>
					</S.Mapa>
					<S.Mapa>
						<Link to="/planilhas">Planilhas</Link>
					</S.Mapa>
					<S.Mapa>
						<Link to="/sobre">Sobre</Link>
					</S.Mapa>
					<S.Mapa>
						<Link to="/contato">Contato</Link>
					</S.Mapa>
				</ul>
			</nav>
			<ul>
				<li>
					<S.Texto>MÍDIAS E ATENDIMENTO</S.Texto>
				</li>
				<S.Midia>
					<a
						href="https://www.instagram.com/planilhas_blitz/"
						target="_blank"
					>
						<FontAwesomeIcon
							icon="fa-brands fa-instagram"
							size="3x"
						/>
					</a>
				</S.Midia>
				<S.Midia>
					<a href="https://wa.me/5591998110782" target="_blank">
						<FontAwesomeIcon
							icon="fa-brands fa-whatsapp"
							size="3x"
						/>
					</a>
				</S.Midia>
			</ul>
		</S.Template>
	);
}

export default Footer;
