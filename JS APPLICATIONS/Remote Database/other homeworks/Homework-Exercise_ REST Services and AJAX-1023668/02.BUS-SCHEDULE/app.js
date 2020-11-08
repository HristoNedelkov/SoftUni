function solve() {

    let currId = 'depot';

    function depart() {
        let infoElem = document.querySelector('#info .info');


        let url = `https://judgetests.firebaseio.com/schedule/${currId}.json`;

        fetch(url)
        .then(res => res.json())
        .then(function(data) {
            infoElem.textContent = `Next stop ${data.name}`;

            let departButton = document.getElementById('depart');
            departButton.disabled = true;

            let arriveButton = document.getElementById('arrive');
            arriveButton.disabled = false;
        })
        .catch(err => {
            infoElem.textContent = 'Error';

            let departButton = document.getElementById('depart');
            departButton.disabled = true;
        });

    }

    function arrive() {
        let infoElem = document.querySelector('#info .info');

        let url = `https://judgetests.firebaseio.com/schedule/${currId}.json`;

        fetch(url)
        .then(res => res.json())
        .then(function(data) {
            infoElem.textContent = `Arriving at ${data.name}`;
            currId = data.next;

            let departButton = document.getElementById('depart');
            departButton.disabled = false;

            let arriveButton = document.getElementById('arrive');
            arriveButton.disabled = true;
        })
        .catch(err => {
            infoElem.textContent = 'Error';

            let arriveButton = document.getElementById('arrive');
            arriveButton.disabled = true;
        });

    }

    return {
        depart,
        arrive
    };
}

let result = solve();