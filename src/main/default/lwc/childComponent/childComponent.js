import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    // Salesforce convention - camelCase
    @api userInputToPassToChild;

    changeFontColor() {
        const randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

        this.template.querySelector('.change-me').style="color:" + randomColor;
        console.log("click change font color");
    }

    changeFontStyle() {
        this.template.querySelector('.change-me').style="font-family:cursive";
        console.log("click change font style");
    }

    changeFontSize() {
        const randomSize = Math.floor(Math.random() * Math.floor(5)) + "rem";
        
        this.template.querySelector('.change-me').style="font-size:" + randomSize;
        console.log("click change font size");
    }
}