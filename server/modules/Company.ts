import { Employee } from "./Employee";
import { Position } from "./enums/Position";
import { randomNumber } from './utils/randomNumber';
import { HistoryLog } from "./utils/HistoryLog";

export class Company {

    // Properties
    private timer: Object = {};
    private timerCount: number = 0;
    private employees: Employee[] = [];
    private historyLog: HistoryLog = new HistoryLog();

    private readonly NUM_OF_EMPLOYEES:number = 10;
    private readonly UPDATE_INTERVAL: number = 1000; // (in milliseconds)

    //Have the company change over time
    // - Someway to deal with change

    constructor() {
        // this.init();
    }

    public init(): void {
        this.hireInitialStaff();
        this.timer = setInterval(this.onTimerInterval.bind(this), this.UPDATE_INTERVAL);
    }

    // RANDOM EVENTS SECTION
    private onTimerInterval() {
        this.timerCount++;

        this.randomEvent();
    }

    private randomEvent(): void {
        const randomChance = randomNumber(1,100);

        switch(randomChance){
            case 1 || 2 || 3 || 4 || 5 || 6:
                this.employees.push(this.createEmployee());
                break;
            case 2:
                this.removeEmployee(false);
                break;
            case 3:
                this.promoteEmployee();
                break;
            case 4:
                this.removeEmployee(true);
                break;
            default:
                break;
        }
    }

    private promoteEmployee(): void {
        const randomEmployeeNumber: number = randomNumber(0, this.employees.length - 1);
        const randomEmployee: Employee = this.employees[randomEmployeeNumber];
        randomEmployee.promote();
        this.historyLog.employeePromote(randomEmployee);
    }

    private removeEmployee(quit?: boolean): void {
        if(this.employees.length <= 1) return;

        const randomEmployeeNumber: number = randomNumber(0, this.employees.length - 1);
        const randomEmployee: Employee = this.employees[randomEmployeeNumber];

        if (quit) {
            this.historyLog.employeeQuit(randomEmployee);
        } else {
            this.historyLog.employeeFired(randomEmployee);
        }

        this.employees.splice(randomEmployeeNumber, 1);
    }

    // STAFF CREATION
    private hireInitialStaff(): void {
        for(let i = 0; i < this.NUM_OF_EMPLOYEES; i++){
            this.employees.push(this.createEmployee());
        }
    }

    public createEmployee(): Employee {
        const newEmployee: Employee = new Employee();
        const randomPromotion = randomNumber(0,5);
        for(let i = 0; i < randomPromotion; i++){
            newEmployee.promote();
        }
        this.historyLog.addNewEmployee(newEmployee);
        return newEmployee;
    }

    // GETTERS

    public getFirstNames(): string[] {
        const firstNames: string[] = [];

        for(let i = 0; i < this.employees.length; i++) {
            firstNames.push(this.employees[i].getFirstName());
        }

        return firstNames;
    }

    public getLastNames(): string[] {
        const lastNames: string[] = [];

        for(let i = 0; i < this.employees.length; i++) {
            lastNames.push(this.employees[i].getLastName());
        }

        return lastNames;
    }

    public getFullNames(): string[] {
        const fullNames: string[] = [];

        for(let i = 0; i < this.employees.length; i++) {
            fullNames.push(this.employees[i].getFullName());
        }

        return fullNames;
    }

    public getTotalSalaries(): number {
        let total: number = 0;

        for(let i = 0; i < this.employees.length; i++) {
            total += this.employees[i].getSalary();
        }

        return total;
    }

    public getAllSalaries(): number[] {
        let salaryList: number[] = [];

        for(let i = 0; i < this.employees.length; i++) {
            salaryList.push(this.employees[i].getSalary());
        }

        return salaryList;
    }

    public getLog(): string[] {
        return this.historyLog.getFullLog();
    }

    public getFireLog(): string[] {
        return this.historyLog.getFireLog();
    }

    public getHireLog(): string[] {
        return this.historyLog.getHireLog();
    }
}