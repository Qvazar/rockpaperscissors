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
		this.setState({
			playerType: e.currentTarget.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const playerType = this.state.playerType;
		this.props.onStartGame(playerType);
	}

	render() {
		return (
			<div className="pregame">
				<form onSubmit={this.onSubmit}>
					<h1>You are?</h1>
					<label>
						<input type="radio" name="playerType" value="human" checked={this.state.playerType === "human"} onChange={this.onPlayerTypeChange} />
						<span>Human</span>
					</label>
					<label>
						<input type="radio" name="playerType" value="ai" checked={this.state.playerType === "ai"} onChange={this.onPlayerTypeChange} />
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
