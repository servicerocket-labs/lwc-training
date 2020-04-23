import { LightningElement, track } from 'lwc';

export default class MainLayout extends LightningElement {
    @track userInput;

    handleUserInputMain(event) {
        this.userInput = event.target.value;
    }
}