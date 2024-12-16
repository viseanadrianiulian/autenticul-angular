export class Prize {
    value? : Number;
    isActive? : boolean;
    month? : string;

    constructor(value: Number, isActive: boolean, month: string){
        this.isActive = isActive;
        this.month = month;
        this.value = value;
    }

}