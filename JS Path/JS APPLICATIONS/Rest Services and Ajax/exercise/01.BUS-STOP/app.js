function getInfo() {
    let input = document.querySelector('#stopId').value
    let stopName = document.querySelector('#stopName')
    let busesInfo = document.querySelector('#buses')
    fetch(`https://judgetests.firebaseio.com/businfo/${input}.json`)
        .then(res => res.json())
        .then(function (res) {
            stopName.textContent = res.name
            let buses = Object.entries(res.buses)
             buses
                .map(el => `<li>Bus ${el[0]} arrives in ${el[1]} minutes</li>`)
                .forEach(element => {
                    console.log(element)
                    busesInfo.innerHTML += element
                });
        })
        .catch(function () {
            stopName.textContent = 'ERROR'
        })
}