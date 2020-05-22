import { LightningElement, track } from 'lwc';

export default class ExampleComponent extends LightningElement {
	@track name = {
		"firstname": "",
		"lastname": "",
		"fullname":  ""
	}

	// eslint-disable-next-line no-alert
	handleButtonClick = () => alert(`You have insert "${this.name.fullname}"`);
	handleFirstnameChange = (event) => {
		this.name.firstname = event.target.value;
		this.name.fullname = this.name.firstname + " " + this.name.lastname
	}
	handleLastnameChange = (event) => {
		this.name.lastname = event.target.value;
		this.name.fullname = this.name.firstname + " " + this.name.lastname
	}
}