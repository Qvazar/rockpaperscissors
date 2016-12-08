require("./countdown.scss");

import React from 'react';

const Countdown = ({percentage}) => (
	<div className="countdown">
		<div className="countdown-gfx" style={{"width":`${percentage * 100}%`}}></div>
	</div>
);

Countdown.propTypes = {
	value: React.PropTypes.number,
	percentage: React.PropTypes.number
}

export default Countdown;
