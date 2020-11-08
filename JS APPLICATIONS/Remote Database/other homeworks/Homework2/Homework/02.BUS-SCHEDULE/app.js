function solve() {

    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let spanLebel = document.querySelector('.info');
    let url = 'https://judgetests.firebaseio.com/schedule/';
    let stopId = 'depot';
    let stopName = '';
    let lastStop = 0;

    function depart() {
        if (stopId == `depot`) {
            lastStop++;
        }

        if (lastStop == 2) {
            spanLebel.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        } else {
            fetch(url + stopId + '.json')
                .then(response => response.json())
                .then(data => {
                    stopName = data.name;
                    spanLebel.textContent = `Next stop ${stopName}`;
                    stopId = data.next;
                });

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }

    function arrive() {
        spanLebel.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();