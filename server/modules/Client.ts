import { IPerson } from "./interfaces/IPerson";


class Client implements IPerson {
    private firstName: String = '';
    private lastName: String = '';

    public getFirstName(): String {
        return this.firstName;
    }

    public getLastName(): String {
        return this.lastName;
    }
}