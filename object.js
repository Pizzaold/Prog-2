const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true,
    hobbyes: ['Music', 'Movies', 'Games'],
    address: {
        city : 'New York',
        county : 'USA'
    },
    get_birth_year: function() {
        return 2023 - this.age;
    }
}   

person.hobbyes.forEach((hobby) => {
    console.log(hobby);
}
);

console.log(person.name);

console.log(person.hobbyes[1]);

console.log(person.get_birth_year());