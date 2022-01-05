function solve(str) {
    let half = str.length /2
    const splitOn = (slicable, ...indices) =>
  [0, ...indices].map((n, i, m) => slicable.slice(n, m[i + 1]));
  

   let res = splitOn(str,half)
    return res.map(e => e.split('').reverse().join('')).join('\n')
}
console.log(solve('tluciffiDsIsihTgnizamAoSsIsihT'))