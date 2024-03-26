import Button from '../Button/Button';
import * as S from './styles';
import { PropTypes } from 'prop-types';

function Oferta(props) {
	const preco = props.preco;
	const thumb = props.thumb;

	return (
		<S.Oferta id='oferta'>
			<S.Img src={thumb} alt="aoba" />
			<S.Preco>De R$ {preco * 2},00</S.Preco>
			<S.Desconto>
				por apenas <br />
				R$ {preco},00
			</S.Desconto>
			<S.Texto>
				Assim que seu pagamento for confirmado, sua planilha será
				enviada por e-mail.
			</S.Texto>
			<Button
				link="https://pay.hotmart.com/V63112191C?checkoutMode=10"
				color="--verde"
				text="Quero a oferta!"
			/>
		</S.Oferta>
	);
}

Oferta.propTypes = {
	preco: PropTypes.number.isRequired,
	thumb: PropTypes.string.isRequired,
};

export default Oferta;
