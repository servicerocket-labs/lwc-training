import { LightningElement, api } from 'lwc';

export default class SecondComponent extends LightningElement {
	@api handleCloseModal;
	@api inputValue;

	closeModal = () => this.handleCloseModal();
	closeModalViaEvent = () => this.dispatchEvent(new CustomEvent('closemodalviaevent'));
}