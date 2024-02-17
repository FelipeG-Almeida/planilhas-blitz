import * as S from './styles';
import PropTypes from 'prop-types';

function Carrosel({ titulo, planilhas }) {
	return (
		<S.CarroselTemplate>
			<S.Titulo>{titulo}</S.Titulo>
			<S.CardsDiv>
				{planilhas.map((planilha, index) => (
					<S.Card key={index} to={planilha.path}>
						<S.CardThumb src={planilha.thumb} alt="" />
						<S.CardNome>{planilha.nome}</S.CardNome>
						<S.CardPreco>R$ {planilha.preco},00</S.CardPreco>
					</S.Card>
				))}
			</S.CardsDiv>
		</S.CarroselTemplate>
	);
}

Carrosel.propTypes = {
	titulo: PropTypes.string.isRequired,
	planilhas: PropTypes.array.isRequired,
};

export default Carrosel;
