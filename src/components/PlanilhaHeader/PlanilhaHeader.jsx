import Button from '../Button/Button.jsx';
import PropTypes from 'prop-types';
import * as S from './style';

function PlanilhaHeader(props) {
	const { titulo, subtitulo, keywords, preview, background } = props.planilha;
	const color = props.color;

	return (
		<S.Headline $background={background} $color={color[1]}>
			<S.HeadlineTexto>
				<S.HeadlineTitulo>{titulo}</S.HeadlineTitulo>
				<S.HeadlineSubtitulo
					dangerouslySetInnerHTML={{ __html: subtitulo }}
				/>
				<Button
					text="Quero saber como!"
					color={color[0]}
					link="oferta"
				/>
				<S.HeadlineKeywords>
					Palavras Chave: {keywords}
				</S.HeadlineKeywords>
			</S.HeadlineTexto>
			<S.HeadlineImg src={preview} alt="" />
		</S.Headline>
	);
}

PlanilhaHeader.propTypes = {
	planilha: PropTypes.object.isRequired,
	color: PropTypes.array.isRequired,
};

export default PlanilhaHeader;
