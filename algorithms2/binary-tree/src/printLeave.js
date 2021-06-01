const person = {
    'first name': 'tharsikan',
    'last name': 'arul',
    age: 27,
    hobbies: ['cricket', 'football'],
    address: {
        city: 'vauniya',
        village: 'thirunavatkulam'
    }
}
const {'first name': name, address, address: {city} } = person;
console.log(name, city, address);