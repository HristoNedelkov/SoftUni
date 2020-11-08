function getInfo() {
    let busStops = ['1287', '1308', '1327', '2334'];
    let stopId = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let busesList = document.getElementById('buses');
    if(!busStops.includes(stopId.value)){
        stopName.innerHTML = 'Error';
        stopId.value = '';
        return;
    }

    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        stopName.innerText = data.name
        Object.keys(data.buses).forEach(key=>{
            let li = document.createElement('li');
            li.innerHTML = `Bus ${key} arrives in ${data.buses[key]} minutes`;
            busesList.appendChild(li);
        });
    });

    stopId.value = '';

}