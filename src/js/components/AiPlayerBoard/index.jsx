import React from 'react';
import Hand from '../Hand';

const AiPlayerBoard = ({player}) => (
	<div className="playerboard">
		<Hand hand={player.hand} />
	</div>
);

AiPlayerBoard.propTypes = {
	player: React.PropTypes.object
};

export default AiPlayerBoard;
