function mixup ['mix','pod']

var original = ['mix','pod'];
var first2 = original.slice(0,2)
var endPart = original.slice (2,5)
var swapped = endPart + first2

// create a function called mixup

// it should take in 2 strings, and retue=rn the concatenation of the 2 strings (separated by a space) slicing out and swapping the first 2 characters of each.  You can assume that the strings are at least 2 characters long.  For example:  muxUp ('mix', 'pod'): 'pox mid'
// mixUp ('dog', 'dinner'): 'dig donner'Look up the Javascript string reference to find methods which may be useful!
