import React from 'react';
import PregameBoard from '../PregameBoard';
import IngameBoard from '../IngameBoard';
import PostgameBoard from '../PostgameBoard';
import { PREGAME, INGAME, POSTGAME } from '../../states';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameState: props.radio.get("gameState")
		}
	}

	componentDidMount() {
		this._lId = this.props.radio.listen((msg) => {
			if (["game:start", "game:end", "game:reset"].indexOf(msg.type) > -1) {
				this.setState({
					gameState: this.props.radio.get("gameState")
				});
			}
		});
	}

	componentWillUnmount() {
		this.props.radio.unlisten(this._lId);
	}

	render() {
		switch (this.state.gameState) {
			case PREGAME:
				return <PregameBoard {...this.props} />;
			case INGAME:
				return <IngameBoard {...this.props} />;
			case POSTGAME:
				return <PostgameBoard {...this.props} />;
			default:
				throw new Error("Unknown state.");
		}
	}
}

App.propTypes = {
	radio: React.PropTypes.object
};

export default App;
