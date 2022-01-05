function attachEvents() {
 
    let loadButton = document.querySelector('.load');
    let addButton = document.querySelector('.add');
 
    let catchesDiv = document.querySelector('#catches');
 
 
    //Add event listeners
    loadButton.addEventListener('click', loadClicked);
    addButton.addEventListener('click', addClicked);
 
 
 
    function loadClicked(e) {
        let loadURL = 'https://fisher-game.firebaseio.com/catches.json';
        fetch(loadURL)
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach(key => appendCatch(key, data)); // forEach automatically sends key as param
            })
    }
 
    function addClicked(e) {
        let angler = document.querySelector('#addForm > .angler');
        let weight = document.querySelector('#addForm > .weight');
        let species = document.querySelector('#addForm > .species');
        let location = document.querySelector('#addForm > .location');
        let bait = document.querySelector('#addForm > .bait');
        let captureTime = document.querySelector('#addForm > .captureTime');
 
        let catchObj = JSON.stringify({
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value
        });
 
        //HTTP Request
        let addUrl = 'https://fisher-game.firebaseio.com/catches.json';
 
        fetch(addUrl, {
            method: 'POST',
            body: catchObj,
        });
        angler.value = '';
        weight.value = '';
        species.value = '';
        location.value = '';
        bait.value = '';
        captureTime.value = '';
    }
 
 
 
 
    function appendCatch(key, data) {
        let { angler, weight, species, location, bait, captureTime } = data[key];
        let catchDiv = createElement('div', 'catch', '', '');
        catchDiv.setAttribute('data-id', key);
 
        let anglerLabel = createElement('label', '', 'Angler', '');
        let anglerInput = createElement('input', 'angler', angler, 'text');
 
        let weightLabel = createElement('label', '', 'Weight', '');
        let weightInput = createElement('input', 'weight', weight, 'number');
 
        let speciesLabel = createElement('label', '', 'Species', '');
        let speciesInput = createElement('input', 'species', species, 'text');
 
        let locationLabel = createElement('label', '', 'Location', '');
        let locationInput = createElement('input', 'location', location, 'text');
 
        let baitLabel = createElement('label', '', 'Bait', '');
        let baitInput = createElement('input', 'bait', bait, 'text');
 
        let captureTimeLabel = createElement('label', '', 'Capture Time', '');
        let captureTimeInput = createElement('input', 'captureTime', captureTime, 'number');
 
        let updateButton = createElement('button', 'update', 'UPDATE');
        let deleteButton = createElement('button', 'delete', 'DELETE');
 
 
        updateButton.addEventListener('click', (e) => {
            let updateURL = `https://fisher-game.firebaseio.com/catches/${key}.json`;
            let catchObj = JSON.stringify({
                angler: anglerInput.value,
                weight: weightInput.value,
                species: speciesInput.value,
                location: locationInput.value,
                bait: baitInput.value,
                captureTime: captureTimeInput.value
            });
 
            fetch(updateURL, {
                method: 'PUT',
                body: catchObj,
            })
 
        });
        deleteButton.addEventListener('click', (e) => {
            let deleteURL = `https://fisher-game.firebaseio.com/catches/${key}.json`;
            fetch(deleteURL, {
                method: "DELETE",
            })
            .catch(e => {
                alert(`sth went VVERY wrong ${e}`)
            })
        });
 
        catchDiv.appendChild(anglerLabel);
        catchDiv.appendChild(anglerInput);
        catchDiv.appendChild(createElement('hr'));
        catchDiv.appendChild(weightLabel);
        catchDiv.appendChild(weightInput);
        catchDiv.appendChild(createElement('hr'));
        catchDiv.appendChild(speciesLabel);
        catchDiv.appendChild(speciesInput);
        catchDiv.appendChild(createElement('hr'));
        catchDiv.appendChild(locationLabel);
        catchDiv.appendChild(locationInput);
        catchDiv.appendChild(createElement('hr'));
        catchDiv.appendChild(baitLabel);
        catchDiv.appendChild(baitInput);
        catchDiv.appendChild(createElement('hr'));
        catchDiv.appendChild(captureTimeLabel);
        catchDiv.appendChild(captureTimeInput);
        catchDiv.appendChild(createElement('hr'));
        catchDiv.appendChild(updateButton);
        catchDiv.appendChild(deleteButton);
 
 
        catchesDiv.appendChild(catchDiv);
 
    }
 
    function createElement(elementType, elementClass, content, inputType) {
        let element = document.createElement(elementType);
 
        if (elementType === 'input') {
            element.type = inputType;
            element.value = content;
        } else {
            element.className = elementClass;
        }
        element.textContent = content;
        return element;
    }
}
 
attachEvents();
 