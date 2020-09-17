function solve() {
   let sendBtn = document.getElementById('send')
   let input = document.getElementById('chat_input')
   let messageField = document.getElementById('chat_messages')
   sendBtn.addEventListener('click',(e) => {
      let newEl = document.createElement('div')
      newEl.innerHTML = input.value
      newEl.classList.add('message', 'my-message')
      messageField.appendChild(newEl)
      input.value = ''
   });
  
}


