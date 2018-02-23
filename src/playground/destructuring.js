// console.log('destructuring')

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// // es6 destructuring
// const {name: firstName = 'Anonymous', age} = person;
// console.log (`${firstName} is ${age}`)

// const {city, temp : temperature} = person.location

// if(city && temperature ) {
//     console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// }

// const {publisher:publisherName = 'Self-published'} = book.publisher

// console.log(publisherName)

const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147']

// const[street, city, state, zip] = address

const[, city, state,] = address

// console.log(`You are in ${address[1]} ${address[2]}` )

console.log(`You are in ${city} ${state}` )

const item  = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const[name,,mediumPrice,] = item

console.log(`A medium ${name} costs ${mediumPrice}`)

