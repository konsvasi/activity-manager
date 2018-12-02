import React from 'react';
import 'bulma/css/bulma.css';

const FormButtons = (props) => {
	let fieldValue = props.isMember ? "Sign in" : "Register";
	let signInMessage = props.isMember ? "Not a member? Create an account" : "Already a member? Sign in";
	return (
		<div className="field is-grouped">
			<div className="control">
				<button className="button is-link">{fieldValue}</button>
			</div>
			<div className="control">
				<button onClick={props.toggleCardFields} className="button is-text">{signInMessage}</button>
			</div>
		</div>
	)
}

export default FormButtons;