import React, {Component} from 'react';	


export default class MentorsForm extends Component{	
		addMentor(event) {
		event.preventDefault();
		var text = this.refs.mentors.value.trim();

		Mentors.insert({
			text: text,
			complete: false,
			createdAt: new Date()
		});

		this.refs.mentors.value = "";

		}

	render() {
	return(

			<form className="new-mentor" onSubmit={this.addMentor.bind(this)}>
				<input 
				type="text" 							ref="mentors"
				placeholder="sign up for Mentors" />

			</form>

			)
	}
}	