import { LightningElement, track } from 'lwc';

export default class FirstComponent extends LightningElement {
	@track showSecondComponent;
	inputValue;

	handleInputChange = ({target}) => this.inputValue = target.value;
	handleShowModal = () => this.showSecondComponent = true;
	handleCloseModal = () => this.showSecondComponent = false;
	handleCloseModalViaEvent = () => this.showSecondComponent = false;
}