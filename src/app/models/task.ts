import { Contact } from "./contact";


export class Task {
    title: string;
    description: string;
    contacts: Array<Contact>;
    dueDate: Date;
    prio: string;
    categoryName: string;
    categoryColor: string;


    constructor(object?: any) {
        this.title = object ? object.title : '';
        this.description = object ? object.description : '';
        this.contacts = object ? object.contacts : [];
        this.dueDate = object ? object.dueDate : null;
        this.prio = object ? object.prio : '';
        this.categoryName = object ? object.categoryName : '';
        this.categoryColor = object ? object.categoryColor : '';
    }


    toJson(formValues: any) {
        return {
            title: formValues.title,
            description: formValues.description,
            contacts: formValues.contacts,
            dueDate: formValues.dueDate,
            prio: formValues.prio,
            categoryName: formValues.categoryName,
            categoryColor: formValues.categoryColor
        }
    }
}