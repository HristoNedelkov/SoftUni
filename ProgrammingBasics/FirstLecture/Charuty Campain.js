function charity(input){
let days = Number(input.shift())
let sladkarite = Number(input.shift())
let cakes = Number(input.shift())
let gofteti = Number(input.shift())
let pancakes = Number(input.shift())

let cenaNacakes = 45
let cenaNaGofreti = 5.80
let cenaNaPancakes = 3.20

let sumataSubranaOtCqlataKampaniq = (((cakes * cenaNacakes) + (gofteti * cenaNaGofreti) + (pancakes * cenaNaPancakes)) * sladkarite) * days

let sumaSled = sumataSubranaOtCqlataKampaniq - 1/8 * sumataSubranaOtCqlataKampaniq

console.log(sumaSled.toFixed(2))
}

charity( ['10', '8 ', '14', '30', '16'] )