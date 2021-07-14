import { reactive } from "vue";

let persons;

export async function getPersons () {
    if (!persons) {
        persons = reactive([]);
        const url = "https://randomuser.me/api/?results=5";
        try{
            const result = await fetch(url);
            const json = await result.json();

            for (const pers of json.results){
                persons.push({
                    id: pers.login.uuid,
                    first: pers.name.first,
                    last: pers.name.last,
                    age: pers.dob.age
                });
            }
        }catch(e){
            console.error("Error:", e);
        }
    }

    return persons;
}

export function deletePerson (id) {
    if(persons){
        for(let i=0; i<persons.length; i++){
            if(persons[i].id === id){
                persons.splice(i, 1);
                break;
            }
        }
    }
}

export function updatePersonName (id, firstName, lastName) {

}

export function updatePersonAge (id, age) {

}