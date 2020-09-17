
var numbers =new Array();
for(var i=0; i<5; i++){
   numbers[i]=parseInt(prompt("Enter your 5 numbers"));
}
document.write("The 5 numbers are : "+numbers+"<br/>" );
var numbersShorted=numbers.sort(function(a,b){
   return a-b;
});
document.write("Number shorting : "+numbersShorted+"<br/>");

var numbersReversing=numbers.sort(function(a,b){
   return b-a;
});
document.write("numbers reversing : "+ numbersReversing);