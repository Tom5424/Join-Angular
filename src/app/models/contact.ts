export class Contact {
    name: string;
    email: string;
    phoneNumber: number;
    initialLetter: string;
    // color: string;


    constructor(object?: any) {
        this.name = object ? object.name : '';
        this.email = object ? object.email : '';
        this.phoneNumber = object ? object.phoneNumber : null;
        this.initialLetter = object ? object.name.charAt(0).toUpperCase() : '';
        // this.color = color ? color : '';
    }


    toJson(formValues: any) {
        return {
            name: formValues.name,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
            initialLetter: this.initialLetter,
            // color: this.color,
        }
    }
}
