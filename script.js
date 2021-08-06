// Hey kiddo


// const checkAge = function(age) {
//     if (age >= 18){
//         return true
//     } else return false

// } 

// const great = function(age) {
//     const isAduld = checkAge(age)

//     if (isAduld) {
//     return "Hello there"
//     }  return "Hey kiddo"
// }

// console.log(great(19))

// Vat calculations


// main function
// main price + vat is  price inc vat


// const prijsIncBtw = function (getal, percentage){
//     const btw = btwBerekenen(getal, percentage)
//     const prijsInc = getal + btw
//     return prijsInc
// }

// const btwBerekenen = function(getal, percentage){
//     const btw = getal / 100 * percentage
//     return btw
// }

// console.log(prijsIncBtw(3, 9))


const splitPrijs = function (verkoopPrijs, percentage){

    const verkoopprijsPetcentage = percentage + 100
    const btw = verkoopPrijs/ verkoopprijsPetcentage * percentage
    const arrayPrijs = []
    const basePrijs = verkoopPrijs - btw;
    arrayPrijs.push(basePrijs, btw)
    return arrayPrijs;
}

const calSplitPrijs = function (verkoopPrijs, percentage) {
    return splitPrijs(verkoopPrijs, percentage)
    
}

console.log(calSplitPrijs(1.19, 19))

