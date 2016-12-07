import React from 'react';

const Hand = ({handModel}) => (
	<div className="hand">
		<div className="hand-image" src={`images/${handModel.name}.png`} alt={handModel.name} />
	</div>
);
