function solve(arr) {
  let line = arr.shift().split('|')
  let numbers = line.length
  let currLine = arr.shift()
  let iskrenPoints = 0
  let index = 0
  let length = 0

  while (currLine != 'Game over') {
    let line = currLine.split(' ')
    let command = line.shift()


    switch (command) {
      case 'Shoot':
        let indexes = line.shift().split('@')
        let index = indexes[1]
        let length = indexes[2]


        if (indexes[0] == 'Left') {

          if (index >= 0 && index <= line.length - 1) {
            while (length != 0) {

              if (index > 0) {
                index--
                length--
              } else if (index == 0) {
                index = line.length - 1
                length--
              }

              if (line[index] >= 5) {
                line[index] -= 5;
                iskrenPoints += 5;
              } else {
                iskrenPoints += line[index];
                line[index] = 0;
              }
            }
          }
        } else {


          if (index >= 0 && index <= line.length - 1) {
            while (length != 0) {

              if (index < line.length - 1) {
                index++
                length--
              } else if (index == line.length - 1) {
                index = 0
                length--
              }

              if (line[index] >= 5) {
                line[index] -= 5;
                iskrenPoints += 5;
              } else {
                iskrenPoints += line[index];
                line[index] = 0;
              }
            }
          }

        }
        break;

      case 'Reverse':
        line = line.reverse()

        break;

    }

    currLine = arr.shift()
  }
  console.log(line.join(' - '))
  console.log(`Iskren finished the archery tournament with ${iskrenPoints} points!`)

}


solve([
  '10|10|10|10|10',
  'Shoot Left@0@2',
  'Shoot Right@4@5',
  'Shoot Right@6@5',
  'Reverse',
  'Game over',
  ''
]
)