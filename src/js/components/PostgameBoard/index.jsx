import React from 'react';
import Hand from '../Hand';

const PostgameBoard = ({radio}) => {
	const players = radio.get("players");
	const winner = radio.get("winner");

	return (
		<div className="postgameboard">
			<Hand hand={players[0].hand} />
			<div>
				{winner ? winner + " wins!" : "It was a draw!"}
			</div>
			<Hand hand={players[1].hand} />
		</div>
	);
};

PostgameBoard.propTypes = {
	radio: React.PropTypes.object
};

export default PostgameBoard;
