require("./pregameBoard.scss");

import React from 'react';

class PregameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerType: "human"
		};

		this.onPlayerTypeChange = this.onPlayerTypeChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onPlayerTypeChange(e) {
		const playerType = e.currentTarget.value;
		this.setState({playerType});
	}

	onSubmit(e) {
		e.preventDefault();
		const playerType = this.state.playerType;
		this.props.onStartGame(playerType);
	}

	render() {
		const humanSelected = this.state.playerType === "human";
		const aiSelected = this.state.playerType === "ai";

		return (
			<div className="pregameBoard">
				<form onSubmit={this.onSubmit}>
					<h2>You are?</h2>
					<label>
						<input type="radio" name="playerType" value="human" checked={humanSelected} onChange={this.onPlayerTypeChange} />
						<span>Human</span>
					</label>
					<label>
						<input type="radio" name="playerType" value="ai" checked={aiSelected} onChange={this.onPlayerTypeChange} />
						<span>AI</span>
					</label>
					<button type="submit" className="startGameButton">Start!</button>
				</form>
			</div>
		);
	}
}

PregameBoard.propTypes = {
	onStartGame: React.PropTypes.func
};

export default PregameBoard;
