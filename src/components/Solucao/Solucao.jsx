import * as S from './style';
import { PropTypes } from 'prop-types';

function Solucao(props) {
	const { textoUm, titulo, itens, textoDois } = props.planilha;
	const color = props.color;

	return (
		<S.Solucao $color={color[1]}>
			<S.Texto dangerouslySetInnerHTML={{ __html: textoUm }} />
			<S.Lista>
				{itens.map((item, index) => (
					<S.Item key={index} $icon={item.icon}>
						{item.texto}
					</S.Item>
				))}
			</S.Lista>
			<S.Titulo>{titulo}</S.Titulo>
			<S.Texto dangerouslySetInnerHTML={{ __html: textoDois }} />
		</S.Solucao>
	);
}

Solucao.propTypes = {
	planilha: PropTypes.object.isRequired,
	color: PropTypes.array.isRequired,
};

export default Solucao;
