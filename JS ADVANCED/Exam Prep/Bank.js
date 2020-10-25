class Bank {
    constructor(bankName) {
        this._bankName = bankName,
            this.allConstumers = []
    }
    newCustomer(costumer) {
        let { firstName, lastName, personalId } = costumer
        let isReg = this.allConstumers.find(el => el.personalId == personalId)
        if (!isReg) {
            this.allConstumers.push(costumer)
            const res = Object.assign({}, costumer)
            costumer.totalMoney = 0
            costumer.transactions = []
           
            return res
        } else {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
    }
    depositMoney(currPersonalId, amount) {
        let isCust = this.allConstumers.find(el => el.personalId == currPersonalId)
        let { firstName, lastName, personalId } = isCust
        if (!isCust) {
            throw new Error("We have no customer with this ID!")
        } else {
                isCust.totalMoney += amount
                isCust.transactions.push(`${firstName} ${lastName} made depostit of ${amount}$!`)
            return `${isCust.totalMoney}$`
        }
    }
    withdrawMoney(currPersonalId, amount) {
        
        let isCust = this.allConstumers.find(el => el.personalId == currPersonalId)
        let { firstName, lastName, personalId } = isCust
        if (!isCust) {
            throw new Error("We have no customer with this ID!")
        } else {
            if (isCust.totalMoney < amount) {
                throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`)
            } else {
                isCust.totalMoney -= amount
                isCust.transactions.push(`${firstName} ${lastName} withdrew ${amount}$!`)
                return `${isCust.totalMoney}$`
            }
        }
    }
    customerInfo(currPersonalId){
        let isCust = this.allConstumers.find(el => el.personalId == currPersonalId)
        let { firstName, lastName, personalId } = isCust
    
        if (!isCust) {
           throw new Error ("We have no customer with this ID!") 
        } else {
            let trans = ''
            isCust.transactions.reverse().forEach((el,i) => {
                trans+= `${(isCust.transactions.length) - i}. ${el}` + "\n"
            })
            return `Bank name: ${this._bankName}
Customer name: ${firstName} ${lastName}
Customer ID: ${personalId}
Total Money: ${isCust.totalMoney}$
Transactions:
${trans}`

        }
    }

}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));


bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
/*
{ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }
{ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }
500$
375$
Bank name: SoftUni Bank
Customer name: Svetlin Nakov
Customer ID: 6233267
Total Money: 375$
Transactions:
3. Svetlin Nakov withdrew 125$!
2. Svetlin Nakov made depostit of 250$!
1. Svetlin Nakov made depostit of 250$!
*/