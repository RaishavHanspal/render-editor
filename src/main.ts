// define type of fields in editing object references

import { ITypes } from "./interface";

// types defines GUI fields that represent properties
const types: Partial<ITypes> = {}

class PrimitiveField<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }

    set(value: T): void {
        this.value = value;
    }

    get(): T {
        return this.value;
    }
}

// class Compound<T extends any[]> {
//     private value: {[key:string]: };
//     constructor(...props: T) {
//        props.forEach(prop => {

//        })
//     }

//     set(value: T): void {
//         this.value = value;
//     }

//     get(): T {
//         return this.value;
//     }
// }

// Text
export class TextField extends PrimitiveField<string> {}
types.text = TextField;

// Number
export class NumberField extends PrimitiveField<number> {}
types.number = NumberField;

// Boolean
export class BooleanField extends PrimitiveField<boolean> {}
types.boolean = BooleanField;




