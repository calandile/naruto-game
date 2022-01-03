import * as Utils from "./utils";

export enum Village {
    LEAF,
    SAND,
    MIST,
}

export class Person {
    readonly name: string;
    village: Village;

    constructor(name: string, village: Village) {
        this.name = name;
        this.village = village;
    }

    protected toString(): string {
        return `${this.constructor.name} ${this.name.toUpperCase()} from Hidden ${Utils.capitalize(Village[this.village])} Village`;
    }

    printMe(): void {
        console.log(this.toString());
    }
}