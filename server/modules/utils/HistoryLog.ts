import { Employee } from "../Employee";
import moment from 'moment';
const currencyFormatter = require('currency-formatter');

export class HistoryLog {
    private log: string[] = [];
    private fireLog: string[] = [];
    private hireLog: string[] = [];

    constructor() {}

    public addNewEmployee(employee: Employee): void {
        const salary: string = currencyFormatter.format(employee.getSalary(), {code: 'USD'});
        const timeStamp: string = moment().format('lll');
        this.log.push(`${timeStamp} - ${employee.getFullName()} joined the team as a ${employee.getPosition()}, making ${salary}!`);
        this.hireLog.push(`${timeStamp} - ${employee.getFullName()}`);
        // console.log(`${timeStamp} - ${employee.getFullName()} joined the team as a ${employee.getPosition()}, making ${salary}!`);
    }

    public employeeQuit(employee: Employee): void {
        const timeStamp: string = moment().format('lll');
        this.log.push(`${timeStamp} - ${employee.getFullName()} quit :(`);
        // console.log(`${timeStamp} - ${employee.getFullName()} quit :(`)
    }

    public employeeFired(employee: Employee): void {
        const timeStamp: string = moment().format('lll');
        this.log.push(`${timeStamp} - ${employee.getFullName()} was FIRED!!!`);
        this.fireLog.push(`${timeStamp} - ${employee.getFullName()}`);
        // console.log(`${timeStamp} - ${employee.getFullName()} was FIRED!!!`);
    }

    public employeePromote(employee: Employee): void {
        const timeStamp: string = moment().format('lll');
        this.log.push(`${timeStamp} - ${employee.getFullName()} was Promoted! They are now a ${employee.getPosition()}!`);
        // console.log(`${timeStamp} - ${employee.getFullName()} was Promoted! They are now a ${employee.getPosition()}!`);
    }

    public getFullLog(): string[] {
        return this.log;
    }

    public getHireLog(): string[] {
        return this.hireLog;
    }

    public getFireLog(): string[] {
        return this.fireLog;
    }
}