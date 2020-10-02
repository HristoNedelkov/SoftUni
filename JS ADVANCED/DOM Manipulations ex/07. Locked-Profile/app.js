function lockedProfile() {

    let hiddenInfo1 = document.getElementById('user1HiddenFields')
    let hiddenInfo2 = document.getElementById('user2HiddenFields')
    let hiddenInfo3 = document.getElementById('user3HiddenFields')
    let btns = document.getElementsByTagName('button')

    let input = document.getElementsByName('user1Locked')[0]
    let input2 = document.getElementsByName('user2Locked')[0]
    let input3 = document.getElementsByName('user3Locked')[0]

    let firstBtn = btns[0]
    let secondBtn = btns[1]
    let thirthBtn = btns[2]

    function showMoreInfo(button, input, hidInfo) {
        button.addEventListener('click', () => {
            
            if (input.checked == false) {
                if (button.textContent == 'Show more') {
                    hidInfo.style.display = 'block'
                    button.textContent = 'Hide It'

                } else {
                    hidInfo.style.display = 'none'
                    button.textContent = 'Show more'
                }

            }
        })
    }
    showMoreInfo(firstBtn, input, hiddenInfo1)
    showMoreInfo(secondBtn, input2, hiddenInfo2)
    showMoreInfo(thirthBtn, input3, hiddenInfo3)

}