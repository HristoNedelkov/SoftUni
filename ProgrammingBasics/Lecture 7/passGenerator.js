function passwordGenerator (input){
    let n=Number(input.shift());
    let l=Number(input.shift());
    let passwordList="";
    let currentPassword="";
 
    for(let a=1; a<=n; a++){
        for(let b=1; b<=n; b++){
            for(let c=97 ; c< 97 + l; c++){
                for(let d= 97; d< 97 + l; d++){
                    for(let e = Math.max(a,b)+1; e<=n; e++){
                            currentPassword= "" + a+b+String.fromCharCode(c)+String.fromCharCode(d)+e;
                            passwordList = passwordList + currentPassword + " ";
                    }                    
                }
            }
        }
    }
 console.log(passwordList);
}


passwordGenerator ([5, 10])