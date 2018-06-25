export class Employee{
    
    name: string;
    surname: string;
    empID: number;
    empRole: string;
    empImg: string;

    constructor(name: string, surname: string, empID: number, empRole: string, empImg:string){
        this.name = name;
        this.surname = surname;
        this.empID = empID;
        this.empRole = empRole;
        this.empImg = empImg;
    }
}