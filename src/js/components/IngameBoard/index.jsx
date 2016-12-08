require("./ingameBoard.scss");

import React from 'react';
import Countdown from '../Countdown';
import Hand from '../Hand';

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
					timeTotal: msg.time + msg.timeLeft,
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
		const percentageOfTime = this.state.timeLeft / this.state.timeTotal;
		const hands= this.props.radio.get("hands");
		const noop = () => {};

		return (
			<div className="ingameBoard">
				<h2>Choose your hand!</h2>
				{players.map((p, i) => (
					<div key={i}>
						{(i > 0) && <Countdown value={this.state.timeLeft} percentage={percentageOfTime} /> }
						<div className={`playerBoard ${p.isAi ? "aiPlayer" : "humanPlayer"}`}>
							{hands.map(h => (
								<div
									key={h.name}
									className={`selectableHand ${p.hand === h ? "selected" : ""}`}
									onClick={p.isAi ? noop : this.props.onSelectHand.bind(null, p, h.name)}>
									<Hand hand={h} />
								</div>
							) )}
						</div>
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
