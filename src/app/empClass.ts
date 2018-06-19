export class Employee{
    
    name: string;
    surname: string;
    empID: number;
    empRole: string;
    usern: number;
    psw: string;

    constructor(name: string, surname: string, empID: number, empRole: string, usern: number, psw: string){
        this.name = name;
        this.surname = surname;
        this.empID = empID;
        this.empRole = empRole;
        this.usern = usern;
        this.psw = psw;
    }
}