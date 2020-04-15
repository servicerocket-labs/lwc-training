import { LightningElement, track } from 'lwc';

export default class NzMainLayout extends LightningElement {
    // It's not clear whether highest parent component need to use @track
    @track userInput;

    handleUserInputMain(event) {
        this.userInput = event.target.value;
    }
}