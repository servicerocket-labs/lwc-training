import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track userInput;

    handleInput(event) {
        this.userInput = event.target.value;

        // Custom Event - https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.events_create_dispatch
        const eventToBroadcast = new CustomEvent(
            'newuserinput', 
            {
                detail: this.userInput
            }
        );
        this.dispatchEvent(eventToBroadcast)
    }
}