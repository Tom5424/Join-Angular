export class Contact {
    name: string;
    email: string;
    phoneNumber: number;


    constructor(object?: any) {
        this.name = object ? object.name : '';
        this.email = object ? object.email : '';
        this.phoneNumber = object ? object.phoneNumber : null;
    }


    toJson(formValues: any) {
        return {
            name: formValues.name,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
        }
    }
}
