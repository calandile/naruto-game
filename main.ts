import { Jutsus } from "./src/jutsus";
import { Person, Village } from "./src/person";
import { Ninja, Clan } from "./src/ninja";

let humans: Array<Person> = [
    new Person("Sakura", Village.LEAF),
    new Ninja("Sasuke", Village.LEAF, Clan.UCHIHA,
        [
            Jutsus.Nature.KATON,
            Jutsus.Nature.RAITON
        ],
        [
            Jutsus.getJutsu("Chidori")!,
            Jutsus.getJutsu("Goukakyuu")!
        ]
    )];


// type TPrintable = Person|Ninja
// function prints2(list: Array<TPrintable>) {
//     for (const i of list) {
//         i.printMe();
//     }
// }
// prints2(humans)

function prints(list: Array<Person>) {
    for (const i of list) {
        i.printMe();
    }
}

//prints(humans)
let sasukePerson = humans.find(v => v.name == "Sasuke")!;
let sasukeNinja = sasukePerson as Ninja;
sasukeNinja.printJutsus();
sasukeNinja.printAffinities();
//(humans.find( (v) => v.name == "Sasuke")! as Ninja).printJutsus();
