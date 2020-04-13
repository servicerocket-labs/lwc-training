import { LightningElement } from 'lwc';

export default class NZInputComponent extends LightningElement {
    userInput = '';
    
    handleUserInput(event) {
        this.userInput = event.target.value;
    }
}