var array1= ['one','two'];
var array2= ['three', 'four'];
//var combined = [array1[0], array1[1], array2[0], array2[1]];
//var combined = [].concat(array1, array2);
const combined = [...array1,...array2];
//var first = array1[0];
//var second = array1[1];
//var three = array1[2] || 'empty';
const[first, second, three = 'empty', ...others] =array1;

/*
function func(){
	var args = Array.prototype.slice.call(this.arguments);
	var first =args[0];
	var others = args.slice(1, args.length);
}
*/
func(...args){var [first, ...others] = args;}