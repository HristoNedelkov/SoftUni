function attachEvents() {
    let sendButton = document.getElementById("submit");
    sendButton.addEventListener("click", sendMessage);

    let refreshButton = document.getElementById("refresh");
    refreshButton.addEventListener("click", refreshMessages);

    function sendMessage() {
        const url = 'https://rest-messanger.firebaseio.com/messanger';
        let authorElem = document.getElementById("author");
        let contentElem = document.getElementById("content");

        let author = authorElem.value;
        let content = contentElem.value;
        let obj = {author, content}

        fetch(url, {
            method: "POST",
            body: JSON.stringify(obj)
        });

        authorElem.value = '';
        contentElem.value = '';
    }

    function refreshMessages() {
        const url = 'https://rest-messanger.firebaseio.com/messanger';
        let messagesArea = document.getElementById("messages");

        fetch(url)
        .then(res => res.json())
        .then(function(data) {
            let res = [];
            Object.keys(data).forEach(id => {
                res.push(`${data[id].author}: ${data[id].content}`);
            });

            messagesArea.value = res.join('\n');
        })


    }

}

attachEvents();