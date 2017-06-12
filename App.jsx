import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import MentorsForm from './MentorsForm.jsx';

Mentors = new Mongo.Collection("mentors");

export default class App extends TrackerReact(React.Component) {

	mentors(){
		return Mentors.find().fetch();
	}
	

	render() {
		let ment = this.mentors();
		if(ment.length < 1){
			return (<div>Loading</div>)
		}
		console.log(this.mentors());
		return (
			<div>
				<h1>Mentors</h1>

				<div>

				</div>
				{ment[4].text}
			</div>
			
			)
	}
}

