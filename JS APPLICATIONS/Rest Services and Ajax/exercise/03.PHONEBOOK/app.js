function attachEvents() {
    let load = document.querySelector('#btnLoad')
    let ul = document.querySelector('#phonebook')
    let inputs = document.querySelectorAll('input')
    let name = inputs[0]
    let phone = inputs[1]
   
    load.addEventListener('click', () => {
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(res => res.json())
            .then(res => {
                let arr = Object.entries(res)
                console.log(arr);
                arr.forEach(per => {
                    let obj = Object.values(per)[1]
                    let idToGive = Object.values(per)[0]
                  
                let createDel = document.createElement('button')
                createDel.textContent = "Delete"
              
                let deleteUrl=`https://phonebook-nakov.firebaseio.com/phonebook/${idToGive}.json`


                createDel.addEventListener('click',()=>{
                    fetch(deleteUrl,{method:'DELETE'})
                })
                let li = document.createElement('li')
                li.textContent = `${obj.person}: ${obj.phone}`
                li.appendChild(createDel)    
                ul.appendChild(li)
            });
            })

    })

    

}

attachEvents();