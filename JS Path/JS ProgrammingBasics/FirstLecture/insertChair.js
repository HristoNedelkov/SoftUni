function zala(input){

    let sm = 1
    let meter = 100 * sm

    let l = Number(input.shift())
let w = Number(input.shift())
let a = Number(input.shift())
let lVSantimetri = l * meter
let wVSantimetri = w * meter
let aVSantimetri = a * meter




let zalaPlosht = lVSantimetri * wVSantimetri
let wardrobe = aVSantimetri * aVSantimetri
let peika = zalaPlosht / 10
let freeSpace = zalaPlosht - wardrobe - peika

let dancersNum = Math.floor(freeSpace / (40 + 7000))


console.log(dancersNum)
}


zala([

"50", 
"25",
"2"
])
