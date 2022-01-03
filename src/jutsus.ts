export namespace Jutsus {
    export enum Nature {
        NONE,
        KATON,
        SUITON,
        RAITON,
        DOTON,
        FUUTON,
    }

    enum Discipline {
        TAIJUTSU,
        NINJUTSU,
        GENJUTSU,
    }

    export class Jutsu {
        name: string;
        element: Nature;
        discipline: Discipline;

        constructor(name: string, element: Nature, discipline: Discipline) {
            this.name = name;
            this.element = element;
            this.discipline = discipline;
        }

        toString(): string {
            return `${Nature[this.element]} ${this.name} (${Discipline[this.discipline]})`;
        }
    }

    const glossary = new Map<string, Jutsu>([
        ["Chidori", new Jutsu("Chidori", Nature.RAITON, Discipline.NINJUTSU)],
        ["Goukakyuu", new Jutsu("Goukakyuu no Jutsu", Nature.KATON, Discipline.NINJUTSU)]
    ]);

    export function getJutsu(name: string): Jutsu | undefined {
        return glossary.get(name);
    }
}