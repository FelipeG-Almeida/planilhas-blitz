import * as S from './styles';
import { PropTypes } from 'prop-types';

function Duvidas(props) {
	const color = props.color;

	return (
		<S.Duvidas>
			<S.Titulo $color={color}>DÚVIDAS FREQUENTES</S.Titulo>
			<ul>
				<li>
					<S.Pergunta>
						Posso realizar alteraçõs (cores, formulas) após comprar
						a planilha?
					</S.Pergunta>
				</li>
				<li>
					<S.Resposta>
						Sim, você tem total liberdade para edição.
					</S.Resposta>
				</li>
				<li>
					<S.Pergunta>
						As planilhas são desbloqueadas para edição?
					</S.Pergunta>
				</li>
				<li>
					<S.Resposta>
						Sim, além das funcionalidades já disponíveis, você
						poderá editar, aumentando linhas e colunas e outras
						alterações conforme sua necessidade, basta realizar a
						desproteção da planilha, que foi pensada para manter a
						integridade da planilha segura.
					</S.Resposta>
				</li>
			</ul>
		</S.Duvidas>
	);
}

Duvidas.propTypes = {
	color: PropTypes.array.isRequired,
};

export default Duvidas;
