function solve(arr) {
    let email = arr.shift()
    let line = arr.shift()
    while (line != 'Complete') {
        if (line == 'Make Upper') {
            email = email.split('').map((e) => e.toUpperCase()).join('')
            console.log(email);

        } else if (line.split(' ')[0] == 'GetDomain') {
            let n = line.split(' ')[1]
            console.log(((email.split('').reverse().join('')).slice(0, n)).split('').reverse().join(''))
        } else if (line == 'GetUsername') {
            if (!email.split('').includes('@')) {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
                console.log(email.split('@')[0])

            }
        } else if (line == 'Encrypt') {
            let t = ''
            for (let char of email.split('')) {
                let i = email.indexOf(char)
                t += email.charCodeAt(i) + " "
            }
            console.log(t)
        } else if (line.split(' ')[0] == 'Replace') {
            let n = line.split(' ')[1]
            let res = email.split('')
            for (const char of res) {
                let i = res.indexOf(char)
                if (char == n) {
                    res[i] = '-'
                }

            }
            console.log(res.join('')  );

        } else if (line == 'Make Lower') {
            email = email.split('').map((e) => e.toLowerCase()).join('')
            console.log(email);

        }
        line = arr.shift()
    }
}
console.log(
    solve([
        'Mike123@somemail.com',
        'Make Upper',
        'GetDomain 3',
        'GetUsername',
        'Encrypt',
        
        'Complete'
    ]
    )
)