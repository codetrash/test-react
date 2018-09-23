import React from 'react'

const style = {
	small: { padding: 10},
	large: { padding: 20},
	background: {
		backgroundColor: 'blue'
	}
};

const Button = (props) => {
	let size = style.small;
	if (props.size === 'lg') {
		size = style.large
	}
	let stl = Object.assign({}, style.background, size);

	return (
		<button onClick={ props.onClick } style={ stl }>
		{ props.children }
		</button>
	);
};

export default Button;