var arr = [1,2,3,4,5];
//forEach()
var newArr = arr.forEach((e,i)=>{
	return e;
});
console.log(newArr);

var newArr = arr.map(function(v, i, arr) {
    return v + 1;
});
console.log(newArr);;
  // return -> 2, 3, 4, 5, 6