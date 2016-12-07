import React from 'react';
import Hand from '../Hand';

const HumanPlayerBoard = ({player, hands, onSelectHand}) => (
	<div className="playerboard">
		{hands.map(h => (
			<div key={h.name} className={`selectableHand ${player.hand === h ? "selected" : ""}`} onClick={onSelectHand.bind(null, player, h.name)}>
				<Hand hand={h} />
			</div>
		) )}
	</div>
);

HumanPlayerBoard.propTypes = {
	player: React.PropTypes.object,
	hands: React.PropTypes.array,
	onSelectHand: React.PropTypes.func
};

export default HumanPlayerBoard;
