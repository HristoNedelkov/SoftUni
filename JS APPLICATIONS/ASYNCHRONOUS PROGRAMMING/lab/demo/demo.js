let promise = new Promise((resolve, rej) => {
    setTimeout(()=> {
        rej('its rejected')
        console.log(Date.now() - now);
    },1000) 
    let now = Date.now() 
    console.log('here is the log');
    
})

promise
.then(function (res) {
    console.log(res)
    console.log('YEY');
})
.catch((res)=> {
    console.log('rejected')
    console.log(res)
})

