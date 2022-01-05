function solve(arr) {
    let students = +arr.shift()
    let lectures = +arr.shift()
    let bonus = +arr.shift()

    let points = arr
    let countStudents = points.length
    let maxBonus = 0
    let all = 0
    let attendence = 0
    for (const studentAttendance of points) {
        let currBonus = 0

        currBonus += (+studentAttendance / lectures) * (5 + bonus)
        if (currBonus > maxBonus) {
            maxBonus = currBonus 
            attendence = studentAttendance
        } 


        all += currBonus
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendence} lectures.`);


}
solve([
    '10',
    '30',
    '14',
    '8',
    '23',
    '27',
    '28',
    '15',
    '17',
    '25',
    '26',
    '5',
    '18',
    
])