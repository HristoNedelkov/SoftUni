function solve(arr) {
   let wiskeyPrice = arr.shift()
   let beerLitres = arr.shift()
   let wineLitres = arr.shift()
   let rakiqLitres = arr.shift()
   let wiskeyLitres = arr.shift()
  
  
   let rakiqPrice = wiskeyPrice / 2
   let winePrice = rakiqPrice - rakiqPrice * 0.4
   let beerPrice = rakiqPrice - rakiqPrice * 0.8
   

    let wiskey = wiskeyPrice * wiskeyLitres
    let rakiq = rakiqPrice * rakiqLitres
    let wine = wineLitres * winePrice
    let beer = beerPrice * beerLitres


    let result = wiskey + rakiq + wine + beer;



   console.log(result.toFixed(2));
   
}
solve(
    [ '50', '10', '3.5', '6.5', '1']
)