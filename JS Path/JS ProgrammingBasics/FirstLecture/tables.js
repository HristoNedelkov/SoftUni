function tables(input) {
   let tablesNum = Number(input.shift());
   let tableLenght = Number(input.shift());
   let tableWidth = Number(input.shift());

   let tableArea = tablesNum * (tableLenght + 2 * 0.30) * (tableWidth + 2 * 0.30)
   let kareArea = tablesNum * ( tableLenght / 2) * (tableLenght / 2)
 
   let priceInUSD =  tableArea * 7 +kareArea * 9
   let priceInBG = priceInUSD * 1.85
   
   
  
   console.log(priceInUSD.toFixed(2) + " USD")
   
   console.log(priceInBG.toFixed(2) + " BGN")
}

tables([
    "5",
    "1.00",
    "0.50"
])