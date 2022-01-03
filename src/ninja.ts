import { Jutsus } from "./jutsus";
import { Person, Village } from "./person";
import * as Utils from "./utils";

export enum Clan {
    HARUNO,
    UCHIHA
}

export class Ninja extends Person {
    clan: Clan;
    affinities: Array<Jutsus.Nature>;
    jutsus: Array<Jutsus.Jutsu>;

    constructor(name: string, village: Village, clan: Clan, affinity: Array<Jutsus.Nature>, jutsus: Array<Jutsus.Jutsu>) {
        super(name, village);
        this.clan = clan;
        this.affinities = affinity;
        this.jutsus = jutsus;
    }

    override toString(): string {
        let str = super.toString();
        let position = str.indexOf(" ");

        return [str.slice(0, position), " ", Clan[this.clan], str.slice(position)].join('');
    }

    printJutsus(): void {
        Utils.printArray(this.jutsus);
    }

    printAffinities(): void {
        let str: string = "Affinities:";
        for (const el of this.affinities) {
            str += " " + Jutsus.Nature[el];
        }
        console.log(str + ".");
    }
}