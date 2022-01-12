let database = {
    username0: 'Sally',
    username1: 'Shelly',
    username2: 'Sara'
}

//Object.keys
Object.keys(database).forEach((key, index) => {
    console.log(key, database[key]);
})

//Object.values
Object.values(database).forEach(value => {
    console.log(value);
})

//Object.entries
Object.entries(database).forEach(value => {
    console.log(value);
})

Object.entries(database).map(value => {
    return value[1] + value[0].replace('username', '');
})