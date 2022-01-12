let will_pokemon = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning'
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'mouse pokemon',
        height: 0.8,
        weight: 30
    }
}

let pikachu_weight = will_pokemon.pikachu.weight
console.log('weight: ' +  pikachu_weight)

let raichu_weight = andrei_pokemon.raichu.weight
console.log('weight: ' + raichu_weight)

//Optional Chaining Operator ?.
let power = will_pokemon?.pikachu?.power || 'no power'
console.log(power)

//Nullish Coalescing Operator ??
let power = will_pokemon?.pikachu?.power ?? 'no power'
