export class Tasks {

    title: string;
    isSelected: boolean;
    date: Date;
    isEdite: boolean;

    constructor(title: string) {
        this.title = title;
        this.isSelected = false;
        this.date = new Date();
        this.isEdite = false;

    }

}