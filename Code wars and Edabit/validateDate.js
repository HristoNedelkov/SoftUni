function timeForMilkAndCookies(date) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    var daysInMonth = function (m, y) {
        switch (m) {
            case 1 :
                return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
                case 8 : case 3 : case 5 : case 10 :
                    return 30;
                    default :
                    return 31
                }
            };
    let m = daysInMonth(month,year)
    
    var isValidDate = function (d, m, y) {
        m = parseInt(m, 10) - 1;
        return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
    };
    return isValidDate(day,m,year)
}
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))