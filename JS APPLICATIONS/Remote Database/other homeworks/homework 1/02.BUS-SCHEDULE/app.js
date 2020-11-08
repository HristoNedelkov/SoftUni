function solve() {
    const url = `https://judgetests.firebaseio.com/schedule/`;
    let stopId = 'depot';
    const info = document.getElementById('info');
    let curStop;
    let firstStop = 'depot';


    function changeButton(){
        let departBtn = document.getElementById('depart');
        let arriveBtn = document.getElementById('arrive');
        if(departBtn.disabled){
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        }else{
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
    }
    function depart() {
        fetch(url + stopId +'.json')
            .then(response => response.json())
            .then(data => {
                curStop = data.name;
                info.textContent = `next stop ${data.name}`;
                stopId = data.next;
                


            })
            

            
            changeButton();

    }

    function arrive() {
        info.textContent = `Arriving at ${curStop}`;
        changeButton();
    }

    return {
        depart,
        arrive 
    };
}

let result = solve();