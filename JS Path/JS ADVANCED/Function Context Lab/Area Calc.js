function solve(area, vol, input) {

    let result = input.map(el => ["area", area.call(el), "volume", vol.call(el)])
    let arr = []
    result.forEach(el => {
     let obj = {'area':el[1],'volume':el[3]}
      arr.push(obj)

    })  
    return arr
}
console.log(solve(area, vol, [
    { "x": "1", "y": "2", "z": "10" },
    { "x": "7", "y": "7", "z": "10" },
    { "x": "5", "y": "2", "z": "10" }
]
))
function vol() {
    return this.x * this.y * this.z;
};
function area() {
    return this.x * this.y;
};

