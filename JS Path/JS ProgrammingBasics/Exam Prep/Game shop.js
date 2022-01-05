function solve(arr) {
    let soldGames = Number(arr.shift())
    
    let other = 0
    

    let perHearthstone = 0
    let perFortnite = 0
    let perOverwatch = 0

    for (let game of arr) {
        
        switch (game) {
            case 'Hearthstone':
            perHearthstone += 100 / soldGames
                break;
            case 'Fornite':
            perFortnite += 100 / soldGames
                break
            case 'Overwatch':
            perOverwatch += 100 / soldGames
                break
            default: other += 100 / soldGames
                break;
        }

    }
    console.log(

`Hearthstone - ${perHearthstone.toFixed(2)}%
Fornite - ${perFortnite.toFixed(2)}% 
Overwatch - ${perOverwatch.toFixed(2)}%
Others - ${other.toFixed(2)}%`


);

}

solve([
    '4',
    
    'Hearthstone',
    'Diablo 2',
    'Star Craft 2',
    'Fornite'

])