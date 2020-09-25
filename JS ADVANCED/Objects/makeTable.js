function solve(arr) {
    let jsonData = arr.shift()
    let students = Object.entries(JSON.parse(jsonData))

    let html = '<table>'

    html += '<tr><td>Pesho</td><td>Promenliva</td><td>100000</td></tr>'
    html += '</table>'
    console.log(students);
}
