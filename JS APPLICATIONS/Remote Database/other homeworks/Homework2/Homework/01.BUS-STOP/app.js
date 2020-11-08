function getInfo() {
    let input = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let busesUl = document.getElementById('buses');

    let stopId = input.value;
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`
    let busesNums = ['1287', '1308', '1327', '2334'];

    busesUl.innerHTML = '';

    if (!busesNums.includes(stopId)) {
        stopName.textContent = 'Error';
        return;
    };

    fetch(url)
        .then(response => response.json())
        .then(busStop => {
            stopName.textContent = busStop.name;
            Object.keys(busStop.buses).forEach(bus => {
                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${busStop.buses[bus]} minutes`;
                busesUl.appendChild(li);
            })

        });

    input.value = '';
}