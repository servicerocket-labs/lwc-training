import { LightningElement } from 'lwc';

export default class ExampleComponent extends LightningElement {
	inputValue;

	handleButtonClick = () => alert(`You have insert "${this.inputValue}"`);
	handleInputChange = (event) => this.inputValue = event.target.value;
}