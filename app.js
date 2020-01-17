// check to see if a number is prime or Notification

// First we need to get user input

document.onkeyup = function(event){
    var number = event.key;

    primeCheck(number);
}

function primeCheck(number) {

    // Loop to check to see if a number has divisors other than one and itself.
    // Note: Loops from two to one less than the number we're checking.
    for (var i = 2; i < number; i++) {
  
      // If the number is evenly divisible
      // by a number between two and one less than itself,
      // then it is not prime.
      if (number % i === 0) {
  
        // So return false.
        // return false;
        console.log("Number is not prime");
        return;
      }
    }
  
    // A prime number has to be greater than one,
    // even if it has a divisor other than one and itself.
    // return number > 1;
    console.log("Number is prime")
  }

