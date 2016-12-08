require("./postgameBoard.scss");

import React from 'react';
import Hand from '../Hand';

const PostgameBoard = ({radio, onReset}) => {
	const players = radio.get("players");
	const winner = radio.get("winner");

	const winnerNo = players.indexOf(winner) + 1;
	const wasADraw = winnerNo === 0;

	return (
		<div className="postgameBoard">
			<div className="scoreboard">
				<h2>{wasADraw ? "Draw!" : `Player ${winnerNo} won!`}</h2>
				{players.map(p => (
					<div className={`player ${p === winner ? "winner" : ""}`}>
						<Hand hand={p.hand}/>
					</div>
				))}
			</div>
			<button className="resetButton" type="button" onClick={onReset}>Play again</button>
		</div>
	);
};

PostgameBoard.propTypes = {
	radio: React.PropTypes.object,
	onReset: React.PropTypes.func
};

export default PostgameBoard;
