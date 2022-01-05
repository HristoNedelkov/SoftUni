function solve(arr) {

    function sortObjectByVal(obj) {
        var keysSorted = Object.keys(obj).sort(function (a, b) { return obj[b] - obj[a] });
        var newObj = {};
        for (var x of keysSorted) {
            newObj[x] = obj[x];
        }
        return newObj
    }
    let countMObj = {}
    let line = arr.shift()
    let users = {}
    while (line != 'Statistics') {
        line = line.split('->')
        let [command, name, text] = [line[0], line[1], line[2]]
        if (command == 'Add') {
            if (!users.hasOwnProperty(name)) {
                users[name] = []
            } else {
                console.log(`${name} is already registered`)
            }
        } else if (command == 'Send') {
            users[name].push(text)

        } else if (command == 'Delete') {
            if (users.hasOwnProperty(name)) {
                delete users[name]
            } else {
                console.log(`${name} not found!`);

            }
        }
        line = arr.shift()
    }

    console.log(`Users count: ${Object.keys(users).length}`);
    Object.entries(users)
        .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
        .forEach(([username, emails]) => {
            console.log(username);
            emails.forEach(email => console.log(` - ${email}`));
        });
    }



console.log(solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics']))