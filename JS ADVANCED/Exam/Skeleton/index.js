function solve() {
    const createElements = (...types) => types.map((type) => document.createElement(type))
    let secAdd = document.querySelectorAll('body > main > section.admin-view.section-view')
    
    let secToAdd = document.querySelector('body > main > section.user-view.section-view > div')

    let form =document.querySelector('body > main > section.admin-view.section-view > div > div > form')
    form = Array.from(form)
    let name = form.shift()
    let date = form.shift()
    let module = form.shift()
    let btn  = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button')
    console.log(btn)
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let isValid = [name, date, module].find(el => el.value == '' || el.value == 'Select module')
        if (!isValid) {
            let elements = createElements('div','h3', 'ul', 'li', 'h4', 'button')
            let [div,h3, ul, li, h4, btn] = elements
            date = (date.value).split('T')
            date = (date[0].split('-').join('/')+" - ").concat(date[1])
            let h3Text = name.value.toUpperCase()
            let t = [h3Text,`${module.value} - ${date}`,'Del' ]
            let c = ['module','flex','red']
            div.className = c[0]
            h3.textContent = t[0]
            h4.textContent = t[1]
            li.className = c[1]
            btn.className = c[2]
            btn.textContent = t[2]
            btn.addEventListener('click',(e)=> {
                //tuk mahash samo li To ako ima samo edno mahash celiq div
                if (secToAdd.children.length == 0) {
                    div.appendChild(ul)
                } else {
                         secToAdd.removeChild(div)

                }
                
            })
            li.appendChild(h4)
            li.appendChild(btn)
            ul.appendChild(li)
            div.appendChild(h3)
            div.appendChild(ul)
            secToAdd.appendChild(div)
            
        } 
    })

};