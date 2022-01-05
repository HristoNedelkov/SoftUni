function attachEvents() {
    let btnGetWeather = document.getElementById('submit');
    let locationNameElement = document.getElementById('location');
    let forecastElement = document.getElementById('forecast');
    let forecastCurrentElement = document.getElementById('current');
    let forecastUpcomingElement = document.getElementById('upcoming');
    let locationsUrl = 'https://judgetests.firebaseio.com/locations.json';
    let baseUrl = 'https://judgetests.firebaseio.com/forecast/';
 
 
    //creating elements with classname and textcontent
    function createEmelent(type, classWord, textContent) {
        let element = document.createElement(type);
        element.className = classWord;
        if (textContent && classWord.includes('symbol')) {
            switch (textContent) {
                case 'Sunny':
                    textContent = '&#x2600';
                    break;
                case 'Partly sunny':
                    textContent = '&#x26C5';
                    break;
                case 'Overcast':
                    textContent = '&#x2601';
                    break;
                case 'Rain':
                    textContent = '&#x2614';
                    break;
            }
            element.innerHTML += textContent;
        } else if (typeof (textContent) == 'object') {
            element.innerHTML = `${textContent[0]}&#176/${textContent[1]}&#176`
        } else {
            element.textContent = textContent;
        }
 
        return element;
    }
    //clearing element childs 
    function clearElement(arr){
        arr.forEach(x => {
            if(x.className != 'label'){
                x.remove();
            }
        });
    }
    btnGetWeather.addEventListener('click', () => {
        fetch(locationsUrl)
            .then(response => response.json())
            .then(data => {
                searchedLocation = data.find(x => x.name == locationNameElement.value);
                if (searchedLocation) {
                    let current = fetch(baseUrl + `today/${searchedLocation.code}.json`);
                    let upcoming = fetch(baseUrl + `upcoming/${searchedLocation.code}.json`);
 
                    Promise
                        .all([current, upcoming])
                        .then(response => Promise.all(response.map(x => x.json())))
                        .then(([curr, next]) => {
 
                            let divForecasts = createEmelent('div', 'forecasts');
                            let spanConditionSymbol = createEmelent('span', 'condition symbol', curr.forecast.condition)//symbol to be passed 
                            let spanConditionsElement = createEmelent('span', 'condition');
                            let spanCity = createEmelent('span', 'forecast-data', curr.name);
                            let spanDegrees = createEmelent('span', 'forecast-data', [curr.forecast.low, curr.forecast.high]);
                            let spanCondition = createEmelent('span', 'forecast-data', curr.forecast.condition);
 
                            divForecasts.appendChild(spanConditionSymbol);
                            spanConditionsElement.appendChild(spanCity);
                            spanConditionsElement.appendChild(spanDegrees);
                            spanConditionsElement.appendChild(spanCondition);
                            divForecasts.appendChild(spanConditionsElement);
 
                            clearElement([...forecastCurrentElement.children]);
 
                            forecastCurrentElement.appendChild(divForecasts);
 
                            let divForecastinfoUpcomming = createEmelent('div', 'forecast-info');
 
                            next.forecast.forEach(f=>{
                                let spanUpcomingContainer = createEmelent('span', 'upcoming');
                                let spanSymbol = createEmelent('span', 'symbol', f.condition);
                                let spanDegreesUpcoming = createEmelent('span', 'forecast-data', [f.low, f.high]);
                                let spanConditionUpcoming = createEmelent('span', 'forecast-data', f.condition);
                                spanUpcomingContainer.appendChild(spanSymbol);
                                spanUpcomingContainer.appendChild(spanDegreesUpcoming);
                                spanUpcomingContainer.appendChild(spanConditionUpcoming);
                                divForecastinfoUpcomming.appendChild(spanUpcomingContainer);
                            });
 
                            clearElement([...forecastUpcomingElement.children]);
 
                            forecastUpcomingElement.appendChild(divForecastinfoUpcomming);
 
                            forecastElement.style.display = 'block'
 
                        })
 
                } else {
                    throw new Error('Error: Location not found!')
                }
 
            })
            .catch(err => {
                let errorElement = createEmelent('span', 'error', err.message);
                forecastElement.style.display = 'block';
                clearElement([...forecastCurrentElement.children]);
                clearElement([...forecastUpcomingElement.children]);
                forecastCurrentElement.appendChild(errorElement);
 
            })
    })
 
}
 
attachEvents();