function resevation (input) {
let dayNow = +input.shift()
let monthNow = +input.shift()

let checkInDay = +input.shift()
let checkInMonth = +input.shift()

let checkOutDay = +input.shift()
let checkOutMonth = +input.shift()

let nights = checkOutDay - checkInDay
let daysApart = Math.abs(dayNow - checkInDay)
let monthsApart = Math.abs(monthNow - checkInMonth)
let cost = 0
let earlyBookingDays = false
let earlyBookingMonth = false

if (daysApart >= 10) {
    earlyBookingDays = true
}

if (monthsApart >= 1 ) {
    earlyBookingMonth = true
}


cost = nights * 30
if (earlyBookingDays) {
    cost = nights*25
}

if (earlyBookingMonth) {
    cost = nights*25
    cost *=0.8
}
    console.log(`Your stay from ${checkInDay}/${checkInMonth} to ${checkOutDay}/${checkOutMonth} will cost ${cost.toFixed(2)}`)

}
resevation ([
'21',
'7',
'28',
'8',
'30',
'8',
     ])