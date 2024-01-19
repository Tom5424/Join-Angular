export class Contact {
    name: string;
    email: string;
    phoneNumber: number;
    initialLetter: string;
    color: string;
    userId: string;


    constructor(object?: any, color?: string, userId?: string) {
        this.name = object ? object.name : '';
        this.email = object ? object.email : '';
        this.phoneNumber = object ? object.phoneNumber : null;
        this.initialLetter = object ? object.name.charAt(0).toUpperCase() : '';
        this.color = color ? color : '';
        this.userId = userId ? userId : '';
    }


    toJson(formValues: any, color?: string, userId?: string) {
        return {
            name: formValues.name,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
            initialLetter: this.initialLetter,
            color: color,
            userId: userId,
        }
    }
}
