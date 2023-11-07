export class User {
    name: string = '';
    email: string = '';
    password: string = '';


    constructor(object?: any) {
        this.name = object ? object.name : '';
        this.email = object ? object.email : '';
        this.password = object ? object.password : '';
    }


    toJson() {
        return {
            name: this.name,
            email: this.email,
            password: this.email,
        }
    }
}
