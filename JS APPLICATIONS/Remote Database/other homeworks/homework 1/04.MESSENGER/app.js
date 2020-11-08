function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json';
    const name = document.getElementById('author');
    const message = document.getElementById('content');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    let textArea = document.getElementById('messages');

    sendBtn.addEventListener('click', ()=>{
    
        let obj = 
            {author: name.value,
            content: message.value
            }
            fetch(url,{method:"POST", body: JSON.stringify(obj)});
            name.value = '';
            message.value = '';
    });

    refreshBtn.addEventListener('click', ()=>{
        let result = [];
        textArea.textContent = '';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach(value => {
                result.push(`${value.author}: ${value.content}\n`);
            });
            
            textArea.textContent = result.join('\n');
        });
    })

}

attachEvents();