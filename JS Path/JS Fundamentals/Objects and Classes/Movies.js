function solve(arr) {
    let movies = []
    for (const command of arr) {
         let tokens =  command.split(' ')
        

        if (tokens[0] == 'addMovie') {
            let theFilmName = tokens.slice(1).join(' ')
            movies.push({name: theFilmName})
            
            
        } else if (tokens.includes('directedBy')) {
            let directedByIndex = tokens.indexOf('directedBy')
            let filmName = tokens.slice(0, directedByIndex).join(' ')
            
                const film = movies.find((o) => o.name === filmName)
                if (film) {
                    let directorName = tokens.slice(directedByIndex + 1).join(' ')
                    film.director = directorName
                }
            
            
        } else if(tokens.includes('onDate')) {
            let theDateIndex = tokens.indexOf('onDate')
            let filmName = tokens.slice(0, theDateIndex).join(' ')

            const film = movies.find((o) => o.name === filmName)
            if (film) {
                film.date = tokens.slice(theDateIndex + 1).join(' ')
            }
            
            
        }

        
    }
   let filteredMovies = movies.filter((movie) => Object.keys(movie).length === 3)
    
   for (const film of filteredMovies) {
       console.log(JSON.stringify(film));
       
   }
  
    
}

solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
 'Fast and Furious directedBy Rob Cohen',
        
               'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
                  'Batman onDate 01.08.2018',
        ]
        
)