(function() {
  //global variables

  const inputScreen = document.querySelector('.screen');

  const yellowButtons = document.querySelectorAll('.btn-yellow');
  const greyButtons = document.querySelectorAll('.btn-grey');
  const equalButton = document.querySelector('.btn-equal');
  const clearButton = document.querySelector('.btn-clear');

  let input = '';
 
  // get values from the yellow buttons

  yellowButtons.forEach(yellow => {
    yellow.addEventListener('click', function(e) {
      
      
      let yellowValue = e.target.getAttribute('data-num')
      console.log(yellowValue)
      
  

      input += yellowValue;

          // get value to the screen
      inputScreen.value = input;

      return input;
      
      
      /*
      if(yellowValue === '*') {
        input * input
        console.log('input +: ' * input);
      } else if (yellowValue === '/') {
        input / input
        console.log('input /: ' + input);
      } else if (yellowValue === '-') {
        input - input
        console.log('input -: ' + input);
      } else if (yellowValue === '+') {
        input + input
        console.log('input +: ' + input);
      }
      */
    })
  })

  // get values from the grey buttons

  greyButtons.forEach(grey => {
    grey.addEventListener('click', function(e) {

      
      let greyValue = e.target.getAttribute('data-num');
      console.log(greyValue)
      

      // put value to the screen
      
    
      
      input += greyValue
      
      inputScreen.value = input;
      
      return input
     
      
    })
  })

  // get value equal button
/*
  equalButton.addEventListener('click', function(e) {

    let total = e.target.value;
    console.log(total)

    
  })
*/
  // get value reset button

clearButton.addEventListener('click', function() {

  // reset screen

  inputScreen.value = '';
  input = '';
})

})();








































/*

//Wrap code in an IIFE
(function(){
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  
  //retrieve data from numbers that are clicked
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });
  
  equal.addEventListener('click', function(e){
    if(screen.value === ''){
      screen.value = 'Please Enter a Value';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  
  clear.addEventListener('click', function(e){
    screen.value = '';
  })
 
})(); //end IIFE
*/