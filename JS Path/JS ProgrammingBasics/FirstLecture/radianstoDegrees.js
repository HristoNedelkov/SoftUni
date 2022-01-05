function radianstoDegrees(input) {

    let radians = Number(input.shift())
  let degrees = radians * 180 / Math.PI

  console.log(degrees.toFixed(0))

}

radianstoDegrees(["3.1416"])
