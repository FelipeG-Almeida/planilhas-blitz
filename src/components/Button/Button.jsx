import PropTypes from 'prop-types';
import { ButtonTemplate } from './styles';

function Button(props) {
	const { text, color, link } = props;

	function scrollToOferta() {
		const component = document.getElementById('oferta');
		component.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<ButtonTemplate
			$color={color}
			to={link === 'oferta' ? '' : link}
			onClick={link === 'oferta' ? scrollToOferta : undefined}
		>
			{text}
		</ButtonTemplate>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	link: PropTypes.string,
};

export default Button;
