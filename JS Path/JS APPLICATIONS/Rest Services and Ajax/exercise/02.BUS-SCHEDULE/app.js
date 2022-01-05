let result = (function solve() {
    var curid = 'depot'
    function depart() {

        let info = document.querySelector('.info')
        let depBtn = document.querySelector('#depart')
        let arrBtn = document.querySelector('#arrive')
        
        fetch(`https://judgetests.firebaseio.com/schedule/${curid}.json`)
            .then(res => res.json())
            .then(res => {
                curid = res.next
                info.textContent = `Next stop ${res.name}`
                depBtn.disabled = 'disabled'
                arrBtn.disabled = ''

            })
            .catch(e => {
                info.textContent = `probemm: ${e}`
            })

    }

    function arrive() {
        let info = document.querySelector('.info')
        let depBtn = document.querySelector('#depart')
        let arrBtn = document.querySelector('#arrive')
        let name= info.textContent.split(' ')
        name.shift()
        name.shift()
        name = name.join(' ')
        
        info.textContent = `Arriving at ${name}`
        depBtn.disabled = ''
        arrBtn.disabled = 'disabled'
    }

    return {
        depart,
        arrive
    };
})()


