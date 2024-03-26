import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles.js';
import { PropTypes } from 'prop-types';

function Beneficios(props) {
	const beneficios = props.planilha;
	const color = props.color;
	const gif = props.gif;

	return (
		<S.Beneficios>
			<ol>
				{beneficios.map((item, index) => (
					<S.Item key={index} $color={color[1]}>
						<S.Container>
							<S.Titulo $color={color[0]}>{item.titulo}</S.Titulo>
							<S.Texto
								dangerouslySetInnerHTML={{ __html: item.texto }}
							/>
						</S.Container>
						<S.Img src={item.imagem} alt="" />
					</S.Item>
				))}
				<S.Item>
					<S.Container>
						<S.Titulo $color={color[0]}>
							Características do produto
						</S.Titulo>
						<ul>
							<S.Caracteristica>
								<FontAwesomeIcon
									icon="fa-solid fa-circle-check"
									style={{ color: `var(${color})` }}
									size="2x"
								/>
								<p>Fácil Preenchimento</p>
							</S.Caracteristica>
							<S.Caracteristica>
								<FontAwesomeIcon
									icon="fa-solid fa-chart-pie"
									style={{ color: `var(${color})` }}
									size="2x"
								/>
								<p>
									Relatórios com Dashboards prontas e
									interativas
								</p>
							</S.Caracteristica>
							<S.Caracteristica>
								<FontAwesomeIcon
									icon="fa-solid fa-star"
									style={{ color: `var(${color})` }}
									size="2x"
								/>
								<p>Design profissional</p>
							</S.Caracteristica>
							<S.Caracteristica>
								<FontAwesomeIcon
									icon="fa-solid fa-arrow-pointer"
									style={{ color: `var(${color})` }}
									size="2x"
								/>
								<p>Navegação intuitiva</p>
							</S.Caracteristica>
						</ul>
					</S.Container>
					<S.Gif src={gif} alt="aoba" />
				</S.Item>
			</ol>
		</S.Beneficios>
	);
}

Beneficios.propTypes = {
	planilha: PropTypes.array.isRequired,
	color: PropTypes.array.isRequired,
	gif: PropTypes.string.isRequired,
};

export default Beneficios;
