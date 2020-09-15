function worldRecord(input){
    let recordInSeconds = Number(input.shift())
    let lenghtInMeters = Number(input.shift())
    let timeForSecond = Number(input.shift())
    
    let fullTime = lenghtInMeters * timeForSecond
    
    let bonus = (Math.floor((lenghtInMeters / 15))) * 12.5
    let allTimes = fullTime + bonus
    let neededTime = allTimes - recordInSeconds
    
    
    if (recordInSeconds > allTimes){
    
        console.log(`Yes, he succeeded! The new world record is ${allTimes.toFixed(2)} seconds.`)
    
    
    } else {
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
    
    }
    }

    
    
