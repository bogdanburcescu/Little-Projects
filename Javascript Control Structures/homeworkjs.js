//3. Write a program to print Fibonacci series of the first 50 terms

    function ShowFibonacci(){
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
 document.write(fibonacci_series(50));

}


//4. Write a program that prints the numbers from 1 to 100.
    //But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
    //For numbers which are multiples of both three and five print “FizzBuzz”.

    function fizzbuzz(){
for(var i=1; i<=100; i++)
{

if(i%3 === 0 && i%5 === 0)
{
    document.write("FizzBuzz");
    }
else if(i%3 === 0)
{
    document.write("Fizz");
    }
    else if(i%5 === 0)
{
    document.write("Buzz");
    }
    else
    {
        document.write(i);
    }
}
}


//2. For var list = [2, 3, 5, 7, 5, 3];
   //a. compute the sum of the elements of an array and display it in the console
   //b. compute the maximum of the elements of an array and display it in the console

    function sum(){
a: var array = [2, 3, 5, 7, 5, 3];
    var sum = array.reduce(function(a, b)
    {return a + b;}, 0);
document.write(sum);
}

    function largest(){
b: var array = [2, 3, 5, 7, 5, 3];
    var largest = Math.max.apply(Math, array);
document.write(largest);
}




//1. Using control structures, do the following:
    // a. display in the console the numbers from 1 to 20
    //b. display in the console the odd numbers from 1 to 20

    function displaynumbers(){
a: var numbersArray = [];
   for(var i = 1; i <21; i++){
       console.log(i);
       var numbers = i;
       numbersArray.push(numbers);
   }
   var output = document.getElementById('displaynumbers');
   output.innerHTML = numbersArray;
}

    function oddnumbers(){
b: var numbersArray = [];
    for(var i = 1; i < 20; i += 2) {
        console.log(i);
        var numbers = i;
        numbersArray.push(numbers);
}
    var output = document.getElementById('oddnumbers');
    output.innerHTML = numbersArray;
    }

