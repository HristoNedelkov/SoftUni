function solve(a) {
return a.sort((a,b) => a.length - b.length || a.localeCompare(b)).join("\n")
}
console.log(solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]))