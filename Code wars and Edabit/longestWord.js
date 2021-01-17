const longest7SegmentWord = arr => {
    let reg = '/[kmvwx]/gi'
	return arr
		.sort((a,b) => b.length - a.length)
		.filter(wrd =>!reg.test(wrd))[0] || "";
}

console.log(longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]))
