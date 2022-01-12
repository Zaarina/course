const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i])
}

basket.forEach(value => {
    console.log(value)
})

//for of
//iterating (arrays and strings)
for (item of basket) {
    console.log(item);
}

//for in - properties
//not iterating but enumerating (objects)
for (item in detailedBasket) {
    console.log(item) //apples, oranges, grapes
    console.log(detailedBasket[item]) //5, 10, 1000
    console.log(item, detailedBasket[item]) //apples 5, oranges 10, grapes 1000
}
