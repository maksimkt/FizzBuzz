
function fizzBuzz() {
  

  for ( var num = 1; num < 100; num++ ) {
      if ( num % 5 === 0 && num % 3 === 0 ){
          document.write( "FizzBuzz <br>" )
      } else {
          if ( num%5 === 0 ){
              document.write( "Buzz <br>" );
          } else {
              if ( num%3 === 0 ){
                  document.write( "Fizz <br>" );
              } else {        
        document.write( num, "<br>" );
        }
      }
    } 
  }
}
console.log(fizzBuzz());