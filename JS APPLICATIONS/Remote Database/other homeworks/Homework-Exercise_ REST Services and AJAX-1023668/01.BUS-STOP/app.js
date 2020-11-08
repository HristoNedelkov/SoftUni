function getInfo() {
    let stopNameElem = document.getElementById("stopName");
    let busesElem = document.getElementById("buses");
    busesElem.innerHTML = '';

    let stopIDInput = document.getElementById("stopId");
    let stopID = stopIDInput.value;

    let url = `https://judgetests.firebaseio.com/businfo/${stopID}.json`;

    fetch(url)
    .then(res => res.json())
    .then(function(data) {
        stopNameElem.textContent = data.name;
        let buses = data.buses;

        Object.keys(buses).forEach(bus => {
            let newLi = document.createElement("li");
            newLi.textContent = `Bus ${bus} arrives in ${buses[bus]}`;
            busesElem.appendChild(newLi);
        });

        stopIDInput.value = '';


    })
    .catch(err => {
        stopNameElem.textContent = 'Error';
        stopIDInput.value = '';
    });

}