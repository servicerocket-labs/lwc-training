import { LightningElement, api } from 'lwc';

export default class NzExerciseButtonComponentD2 extends LightningElement {
    @api userInputToPassToChild;

    changeFontColor() {
        const randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

        this.template.querySelector('[data-id="changing-input"]').style="color:" + randomColor;
        console.log("click change font color");
    }

    changeFontStyle() {
        this.template.querySelector('[data-id="changing-input"]').style="font-family:cursive";
        console.log("click change font style");
    }

    changeFontSize() {
        const randomSize = Math.floor(Math.random() * Math.floor(5)) + "rem";
        
        this.template.querySelector('[data-id="changing-input"]').style="font-size:" + randomSize;
        console.log("click change font size");
    }
}