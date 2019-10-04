
import * as data from '../modules/data/names.json';
import { Position } from './enums/Position.js';
import { MeritIncrease } from './enums/MeritIncrease.js';
import { randomNumber } from './utils/randomNumber';
import { IPerson } from './interfaces/IPerson.js';

export class Employee implements IPerson{
    private firstName: string;
    private lastName: string;
    private salary: number;
    private position: Position;

    constructor(firstName?: string, lastName?: string, salary?: number, position?: Position) {
        this.firstName = firstName ? firstName : this.createFirstName();
        this.lastName = lastName ? lastName : this.createLastName();
        this.salary = salary ? salary : this.createSalary();
        this.position = position ? position : Position.ASSOCIATE;
    }

    private createFirstName(): string {
        return data.first_names[randomNumber(0, data.first_names.length - 1)];
    }

    private createLastName(): string {
        return data.last_names[randomNumber(0, data.last_names.length - 1)];
    }

    private createSalary(): number {
        return randomNumber(30000,50000);
    }

    public promote(): void {
        switch(this.position) {
            case Position.ASSOCIATE:
                this.position = Position.ANALYST;
                this.salary = this.meritIncrease(MeritIncrease.ANALYST);
                break;
            case Position.ANALYST:
                this.position = Position.SENIOR_ANALYST;
                this.salary = this.meritIncrease(MeritIncrease.SENIOR_ANALYST);
                break;
            case Position.SENIOR_ANALYST:
                this.position = Position.MANAGER;
                this.salary = this.meritIncrease(MeritIncrease.MANAGER);
                break;
            case Position.MANAGER:
                this.position = Position.SENIOR_MANAGER;
                this.salary = this.meritIncrease(MeritIncrease.SENIOR_MANAGER);
                break;
            case Position.SENIOR_MANAGER:
                this.position = Position.DIRECTOR;
                this.salary = this.meritIncrease(MeritIncrease.DIRECTOR);
                break;
            case Position.DIRECTOR:
                this.position = Position.VICE_PRESIDENT;
                this.salary = this.meritIncrease(MeritIncrease.VICE_PRESIDENT);
                break;
            case Position.VICE_PRESIDENT:
                this.position = Position.SENIOR_VICE_PRESIDENT;
                this.salary = this.meritIncrease(MeritIncrease.SENIOR_VICE_PRESIDENT);
                break;
            case Position.SENIOR_VICE_PRESIDENT:
                this.position = Position.PRESIDENT;
                this.salary = this.meritIncrease(MeritIncrease.PRESIDENT);
                break;
        }
    }

    private meritIncrease(percentage: number): number {
        return Math.floor(this.salary * (1 + (percentage)))
    }

    // GETTERS AND SETTERS
    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getPosition(): Position {
        return this.position;
    }
}