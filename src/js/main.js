require('../css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './Radio';
import GameController from './controllers/GameController'
import App from './components/App';
import Hand from './models/Hand';

const radio = new Radio();

const SCISSORS = "scissors";
const PAPER = "paper";
const ROCK = "rock";

const hands = [
	new Hand({name: SCISSORS, beats: [PAPER]}),
	new Hand({name: PAPER, beats: [ROCK]}),
	new Hand({name: ROCK, beats: [SCISSORS]})
];

const roundTime = 5000;

const gameCtrl = new GameController({radio, hands, roundTime});

const reactRoot = document.getElementsByTagName("main")[0];

ReactDOM.render(
	<App
		radio={radio}
		onStartGame={gameCtrl.start.bind(gameCtrl)}
		onSelectHand={gameCtrl.selectHand.bind(gameCtrl)}/>,
	reactRoot
);
