import { LightningElement, track } from 'lwc';

export default class PiotrCalculator extends LightningElement {
    @track operation = '+';
    @track value1 = 0
    @track value2 = 0
    @track output = 0

    get operation_options() {
        return [
            { label: '+', value: '+' },
            { label: '-', value: '-' },
            { label: '*', value: '*' },
            { label: ':', value: ':' },
        ];
    }

    handleChange(event) {
        this.operation = event.detail.value;
        console.log("option", this.operation)
        this.getOutput()
    }

    handleChangeInput1(event) {
        this.value1 = parseInt(event.detail.value)
        console.log("input1", this.value1)
        this.getOutput()
    }

    handleChangeInput2(event) {
        this.value2 = parseInt(event.detail.value)
        console.log("input2", this.value2)
        this.getOutput()
    }

    getOutput() {
        console.log("option", this.operation)
        switch (this.operation) {
            case '+': this.output = this.value1 + this.value2; break;
            case '-': this.output = this.value1 - this.value2; break;
            case '*': this.output = this.value1 * this.value2; break;
            case ':': this.output = this.value1 / this.value2; break;
        }
        console.log("output", this.output)
    }

}