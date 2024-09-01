import { NumberField, TextField, BooleanField } from "./main";

export interface ITypes {
    number: typeof NumberField;
    text: typeof TextField;
    boolean: typeof BooleanField;
}