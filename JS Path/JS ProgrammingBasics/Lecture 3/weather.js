function clothes(input){
let temp = Number(input.shift())
let time = input.shift()

let outfit;
let shoes;


if (temp >=  10 && temp <= 18){
  if (time ==="Morning"){
        outfit = "Sweatshirt"
          shoes = "Sneakers"
}    else if(time =="Afternoon" || time == "Evening"){
    outfit = "Shirt"
    shoes = "Moccasins"
}
}

if (temp > 18 && temp <= 24){
    if (time ==="Morning"){
          outfit = "Shirt"
            shoes = "Moccasins"
  }else if(time =="Afternoon"){
      outfit = "T-Shirt"
      shoes = "Sandals"
  }else if(time ==="Evening"){
      outfit = "Shirt"
      shoes = "Moccasins"
  }
  
}

if (temp >= 25){
    if (time ==="Morning"){
          outfit = "T-Shirt"
            shoes = "Sandals"
  }else if(time =="Afternoon"){
      outfit = "Swim Suit"
      shoes = "Barefoot"
  }else if(time ==="Evening"){
      outfit = "Shirt"
      shoes = "Moccasins"
  }
  
}


console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
}

clothes(["16", "Evening"])