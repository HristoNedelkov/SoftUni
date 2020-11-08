function attachEvents() {
    let nameInput = document.getElementById('author');
    let messageInput = document.getElementById('content');
    let submitBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');
    let screen = document.getElementById('messages');
    let url = 'https://rest-messanger.firebaseio.com/messanger.json';

    submitBtn.addEventListener('click', () => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ author: nameInput.value, content: messageInput.value })
        });
        nameInput.value = '';
        messageInput.value = '';
    });

    refreshBtn.addEventListener('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(messanger => {
                let result;
                Object.values(messanger).forEach(value => {
                    result += `${value.author}: ${value.content}\n`;
                });

                screen.textContent = result;
            });
    });
}

attachEvents();