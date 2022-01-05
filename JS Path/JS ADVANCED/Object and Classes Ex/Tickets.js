function solve(arr,word){

    class Ticket {
        constructor(d,p,s) {
            this.destination = d;
            this.price = p;
            this.status = s    
        }     
    }
    let array = []
    for (const ticket of arr) {
        let [dist,pr,st] = ticket.split('|')
 
        let ticketObj = new Ticket(dist,pr,st)
        array.push(ticketObj)
    }
    array.sort((a,b)=>sortByCriteria(a,b))
    function sortByCriteria(a, b) {
        try {
            return a[word].localeCompare(b[word]);
        } catch(e) {
            return a[word] - b[word];
        }
    }

   return array
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));