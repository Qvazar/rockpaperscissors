import React from 'react';
import HumanPlayerBoard from '../HumanPlayerBoard';
import AiPlayerBoard from '../AiPlayerBoard';
import Countdown from '../Countdown'

class IngameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLeft: 0
		}
	}

	componentDidMount() {
		this._lId = this.props.radio.listen((msg) => {
			if (msg.type === "game:heartbeat") {
				this.setState({
					timeLeft: msg.timeLeft
				});
			}
		});
	}

	componentWillUnmount() {
		this.props.radio.unlisten(this._lId);
	}

	render() {
		const players = this.props.radio.get("players");

		return (
			<div>
				{players.map((p, i) => (
					<div key={i}>
						{(i > 0) && <Countdown value={this.state.timeLeft}/> }
						{p.isAi ? (<AiPlayerBoard player={p}/>) : (
							<HumanPlayerBoard
								player={p}
								hands={this.props.radio.get("hands")}
								onSelectHand={this.props.onSelectHand}/>)}
					</div>
				))
				}
			</div>
		);
	}
}

IngameBoard.propTypes = {
	radio: React.PropTypes.object,
	onSelectHand: React.PropTypes.func
}

export default IngameBoard;
