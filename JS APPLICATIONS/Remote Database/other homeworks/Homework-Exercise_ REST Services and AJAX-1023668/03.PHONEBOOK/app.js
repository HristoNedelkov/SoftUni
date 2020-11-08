function attachEvents() {
    let loadButton = document.getElementById("btnLoad");
    loadButton.addEventListener("click", loadNumbers);
    let createButton = document.getElementById("btnCreate");
    createButton.addEventListener("click", addNumber);

    // let url = 'https://phonebook-nakov.firebaseio.com/phonebook';

    function loadNumbers() {
        const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

        fetch(url)
        .then(res => res.json())
        .then(function(data) {
            let phonebookElem = document.getElementById("phonebook");
            phonebookElem.innerHTML = '';

            Object.keys(data).forEach(id => {
                let newLi = document.createElement("li");
                newLi.textContent = `${data[id].person}:${data[id].phone}`;
                newLi.id = id;

                let deleteButton = document.createElement("button");
                deleteButton.type = "button";
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener("click", deleteNumber);

                newLi.appendChild(deleteButton)
                phonebookElem.appendChild(newLi)


            });

        });
    }

    function addNumber() {
        let personInput = document.getElementById("person");
        let phoneInput = document.getElementById("phone");

        let person = personInput.value;
        let phone = phoneInput.value;

        const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
        let obj = {person, phone};


        fetch(url,{
            method: 'POST',
            body: JSON.stringify(obj)
        });

        personInput.value = '';
        phoneInput.value = '';
        loadNumbers();
    }

    function deleteNumber(e) {
        let parentLi = e.target.parentElement;
        const url = `https://phonebook-nakov.firebaseio.com/phonebook/${parentLi.id}.json`

        fetch(url, {method: 'DELETE'});

        parentLi.remove();

    }

}

attachEvents();