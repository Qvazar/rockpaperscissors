import React from 'react';
import paperImage from 'file!../../../images/paper.png';
import rockImage from 'file!../../../images/rock.png';
import scissorsImage from 'file!../../../images/scissors.png';

const images = {
	paper: paperImage,
	rock: rockImage,
	scissors: scissorsImage
};

const Hand = ({hand}) => (
	<div className="hand">
		<img className="hand-image" src={images[hand.name]} alt={hand.name} />
	</div>
);

Hand.propTypes = {
	hand: React.PropTypes.object
}

export default Hand;
