import React from 'react';

const formatValue = (val) => {
//	const seconds = Math.floor(val / 1000);
//	const millis = val - (seconds * 1000);

	return Math.round(val / 10) / 100;

//	return `${seconds}.${millis};`
};

const Countdown = ({value}) => (
	<div className="countdown">
		<span>{formatValue(value)}</span>
	</div>
);

Countdown.propTypes = {
	value: React.PropTypes.number
}

export default Countdown;
