var a = 3;
var b = 20;
var value = (a*a) + (2 * a * b) - (b*b);

if (value > 0) {
	console.log('wynik dodadni')
} else if (value < 0) {
	console.log('wynik ujemny')
} else {
	console.log('wynik równy zero')
}