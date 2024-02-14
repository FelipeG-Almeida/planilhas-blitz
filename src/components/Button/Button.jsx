import PropTypes from 'prop-types';
import { ButtonTemplate } from './styles';

function Button(props) {
	const { text, color, link } = props;

	return (
		<ButtonTemplate $color={color} to={link}>
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
