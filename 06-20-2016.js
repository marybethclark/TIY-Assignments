function notBad() {
    var str = 'This dinner is not that bad!';
    var remove = /not/g;
  	var result = str.replace(remove, " ");
}
console.log(notBad);

// notBad('This dinner is not that bad!');



// var str = 'Twas the night before Xmas...';
// var newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr);  // Twas the night before Christmas...
