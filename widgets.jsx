import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';


document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<ALL />, root);
	// ReactDOM.render(<Tabs index={0} title='tab1' content='content1' />, root);
});


class ALL extends React.Component{
	render(){
		return (
			<div>
				<Clock />
				<Tabs />
				<Weather />
			</div>
		);
	}
}
