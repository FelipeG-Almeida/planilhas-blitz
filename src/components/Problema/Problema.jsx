import PropTypes from 'prop-types';
import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Problema(props) {
	const { titulo, descricao } = props.planilha;
	const color = props.color;

	return (
		<S.Problema>
			<S.Div>
				<FontAwesomeIcon
					icon="fa-solid fa-circle-exclamation"
					fade
					size="4x"
					style={{ color: `var(${color})` }}
				/>
				<S.Titulo>{titulo}</S.Titulo>
			</S.Div>
			<S.Descricao dangerouslySetInnerHTML={{ __html: descricao }} />
		</S.Problema>
	);
}

Problema.propTypes = {
	planilha: PropTypes.object.isRequired,
	color: PropTypes.array.isRequired,
};

export default Problema;
