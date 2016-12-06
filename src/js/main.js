require('../css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Hand from './models/Hand';

const SCISSORS = "Scissors";
const PAPER = "Paper";
const ROCK = "Rock";

const hands = [
	new Hand({name: SCISSORS, beats: [PAPER] }),
	new Hand({name: PAPER, beats: [ROCK] }),
	new Hand({name: ROCK, beats: [SCISSORS] })
];

const reactRoot = document.getElementsByTagName("main")[0];

ReactDOM.render(
	<App hands={hands} />,
	reactRoot
);
