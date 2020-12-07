let promise = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve('its resolved')
        console.log(Date.now() - now);
    }, 1000)
    let now = Date.now()
    // console.log('here is the log');
})
function letsParty() {
    let frst = Promise.resolve('asf')
    let second = Promise.resolve('iskascko')

    return Promise.all([frst, second])
}

letsParty()
    .then(res => console.log('tul poluchavam \n'))
    .catch(console.log('problemmm'))


promise
    .then(function (res) {
        console.log(res)
        return Promise.reject('tova e returnato v htrnav thena')
    })
    .then(res => {
        console.log('Tova e vtoriq then')
    })
    .catch((res) => {
        console.log(`rejected and thats the returned stastus ${res}`)
    })

