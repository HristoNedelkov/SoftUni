function solev(arr) {

arr.forEach(element => {
   let num = element

   console.log(isPali(num))
   

});

    function isPali(number) {
        
    let rem, temp, final = 0;
    

    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        return (true);
    }
    else {
        return (false);
    }

    }
}



solev([123,323,421,121])