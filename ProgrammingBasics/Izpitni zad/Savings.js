function savings (input) {
    let moneyForMonth = +input.shift()
        let numMonths = +input.shift()
            let neededMoney = +input.shift()
    
            let herMoney = (moneyForMonth / 100) * 30 

            let savedMoney = moneyForMonth - (neededMoney + herMoney)

            let allMoney = numMonths * savedMoney

            let allMoneyPer = (savedMoney / moneyForMonth) *100
            
            
      
            console.log(`She can save ${allMoneyPer.toFixed(2)}%`)
            console.log(allMoney.toFixed(2))
      
}

    savings (['1500', '3', '800'])