function area(input){
    let x1 = Number(input.shift())
    let y1 = Number(input.shift())
    let x2 = Number(input.shift())
    let y2 = Number(input.shift())

    let lenght = Math.abs(x1 - x2)
    let height = Math.abs(y1 - y2)

    let area = lenght * height
let perimeter = 2 * (lenght + height)
    console.log(area.toFixed(2))
    console.log(perimeter.toFixed(2))

}


area([
    "60",
    '20', 
    "10", 
    "50"
])