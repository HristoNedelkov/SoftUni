function towerBuilder(nFloors) {
    let res = []
    for (let i = 1; i <= nFloors * 2+1 ; i += 2) {
       
        res.push("  "+"*".repeat(i)+"  ")
    }
   return (res);

}
towerBuilder(3)