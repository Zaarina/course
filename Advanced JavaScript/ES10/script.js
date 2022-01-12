//flat
const array = [1,[2,3],[4,5]]

array.flat()

//fromEntries()
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

Object.fromEntries(userProfiles)

//try-catch
try {
    4 + 5
} catch (error) {
    console.log('you messed up' + error)
}