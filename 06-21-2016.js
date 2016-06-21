// I have no idea how to figure this out with the time given!

var num1 = 100;
var num2 = 100;

// from https://ujjaini.wordpress.com/2013/07/17/checking-if-a-string-is-a-palindrome-using-javascript/
var teststring = 'abcdedcba';
function IsPalindromeIteration(str){
    var len = str.length, i=0, result = true;
    if (len <= 1) return true;
    while(i != len - i - 1){
        var start = str.charAt(i),
        end = str.charAt(len - i - 1);
        if (start != end){
            return false;
        }
        i++;
    }
    return result;
}

// res will have a value 'true'
var res = IsPalindromeIteration(teststring);
console.log('Is the string a palindrome ' + res);
