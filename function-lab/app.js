// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply(val1, val2){
 return val1 * val2;
}
// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(val1, val2, val3){
	return val1 + val2 + val3;
}
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(val1, val2){
	if(val1 < val2){
		return val1;
	}else{
		return val2;
	}
}
// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(val1, val2, val3){
	if(val1 > val2 && val1 > val3){
		return val1;
	}
	else if(val2 > val3){
		return val2;
	}
	else{
		return val3;
	}
}
// 5. Write a function called 'reverseString' that returns the reverse a string 
	function reverseString(str){
		var splitstring = str.split('');

		var reversearray = splitstring.reverse();

		var joinstring = reversearray.join('');

		return joinstring;
	}
// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
	function disemvowel(str){

		return str.replace(/[aeiou]/gi, '');
	}
// 7. Write a function called 'removeOdd' that removes all ODD number from an array
 	function removeOdd(array){
 		var evens = [];
 		for(var i = 0; i < array.length; i++){

 			if(array[i] % 2 == 0){
 				evens.push(array[i]);
 		}
 	}
return evens;
 }
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
    function removeEven(array){
    	var odds = [];
    	for(var i = 0; i < array.length; i++){
    		if(array[i] % 2 != 0){
    			odds.push(array[i]);
    		}
    	}
    	return odds;
    }
// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
		function longestString(array){
           
           var initialLength = array[0];
    
			
			for(var i = 0; i < array.length; i++){
			
			if(initialLength.length < array[i].length){
				
				initialLength = array[i];
			  }
			}
			return initialLength;
		}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array, 
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
	function allElementsExceptFirstThree(array){

		var newArray = array;
			
			newArray.splice(0, 3);
		
		return newArray;
	}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(array) {
var newObject = {};
for (var i=0; i < array.length; i++) {
    newObject = [array[i]];
};
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules 
         function fizzBuzz(numb){

     if(numb % 3 == 0 ){
        return("Fizz");
    }
    if( numb % 5 == 0 ){
        return("Buzz");
    }
    if( ( numb % 3 == 0 ) && ( numb % 5 == 0 ) ){
        return('FizzBuzz');
    }
         	}

        
// But for multiples of three print "Fizz" instead of the number 
// For the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".












