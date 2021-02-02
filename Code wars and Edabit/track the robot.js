function trackRobot(...steps) {
	var r = [0,0];
	for (var i in steps) {
		var d = i % 4;
	  if (d == 0) r[1] += steps[i];
	  if (d == 1) r[0] += steps[i];
	  if (d == 2) r[1] -= steps[i];
	  if (d == 3) r[0] -= steps[i];
	}
	return r;
}

console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

//res => [6,15]
