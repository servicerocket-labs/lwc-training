import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {
	handleClick(event) {
		const firstInput = this.template.querySelector('[data-id="first-input"]');
		console.log("inputText:", firstInput.value);
		alert(`You have insert "${firstInput.value}"`);
	}
}