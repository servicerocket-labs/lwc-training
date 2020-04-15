import { LightningElement, track } from 'lwc';

export default class NZExerciseComponentD2 extends LightningElement {
    // @track is needed to track state changes
    @track userInput;

    handleInput(event) {
        // Set the value
        this.userInput = event.target.value;

        // Set the value to broadcast custom event
        const eventToBroadcast = new CustomEvent(
            'newuserinput', 
            {
                detail: this.userInput
            }
        );
        this.dispatchEvent(eventToBroadcast)
    }
}