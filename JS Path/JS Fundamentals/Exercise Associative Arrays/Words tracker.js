function solve (arr) {
let tracker = {}
let elements = arr.shift().split(' ').forEach(element => {
tracker[element] = 0    

});
 arr.forEach(element => {
     if (tracker.hasOwnProperty(element)) {
         tracker[element] ++
     }
 });
Object.keys(tracker).sort((a, b) => tracker[b] - tracker[a])
 .forEach((key) => {
    console.log(`${key} - ${tracker[key]}`);
    
 })
 
}
solve (
    [
        'words to this and', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
        ]
        
)