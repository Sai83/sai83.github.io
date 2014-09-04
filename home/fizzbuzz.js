var fizzbuzz = (function(){

var getFizz = function(num){
if(num%3 === 0){
   return "fizz";
}
else{
	return "";
}
};

var getBuzz = function(num){

if(num%5 === 0){
	return "buzz";
}
else{
  return "";
}

};
var getFizzBuzz = function(num){
	return (getFizz(num) + getBuzz(num));

};

return{
	getFizz :getFizz,
	getBuzz : getBuzz,
	getFizzBuzz:getFizzBuzz
};


}());