function disemvowel(str) {
  let strArr = str.split(' ')
    let res = []
  for (let word of str) {
   word = word.split('')
    for (const i in word) {
        let sym = word[i].toLowerCase()
        if (sym == 'e' || sym == 'o' ||sym == 'i' || sym == 'a' || sym == 'u') {
            word.splice(i, 1)
        }
        
        
    }    
res.push(word)

  }
  

    console.log (res.join(''));
}

disemvowel("This website is for losers LOL!")

//Ths wbst s fr lsrs LL!