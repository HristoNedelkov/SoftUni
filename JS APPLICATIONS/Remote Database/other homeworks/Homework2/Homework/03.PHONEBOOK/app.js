function attachEvents() {
    let personInfo = document.getElementById('person');
    let phoneInfo = document.getElementById('phone');
    let createBtn = document.getElementById('btnCreate');
    let loadBtn = document.getElementById('btnLoad');
    let phoneBookUl = document.getElementById('phonebook')

    let url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    loadBtn.addEventListener('click', () => {
        phoneBookUl.innerHTML = '';
        fetch(url)
            .then((response) => response.json())
            .then((book) => {
              Object.keys(book).forEach((human) => {
                
                  let li = document.createElement('li');
                  let deleteBtn = document.createElement('button');

                  li.textContent = `${book[human].person}: ${book[human].phone}`;
                  deleteBtn.textContent = `DELETE`;

                  deleteBtn.addEventListener('click', () => {
                    let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${human}.json`;
                    fetch(deleteUrl, {method: "DELETE"});
                    phoneBookUl.removeChild(li);
                  });

                  li.appendChild(deleteBtn);
                  phoneBookUl.appendChild(li);

              });
            });
    });

    createBtn.addEventListener("click", () => {
        fetch(url, {
          method: "POST",
          body: JSON.stringify({ person: personInfo.value, phone: phoneInfo.value })
        });
      });

}

attachEvents();
