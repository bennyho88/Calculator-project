
(function() {

  // select elements

  const btns = document.querySelectorAll('.btn');
  const screen = document.querySelector('.screen');
  const btnEqual = document.querySelector('.btn-equal');
  const btnClear = document.querySelector('.btn-clear');

  btns.forEach(btn => {

    btn.addEventListener('click', function() {

      let number = btn.getAttribute('data-num');
      console.log(number)

      screen.value += number;
    
    })
  })

  btnEqual.addEventListener('click', function() {

    if(screen.value === '') {
      screen.value = 'Please Enter A Valid Input';
    } else {
      let value = eval(screen.value);
      screen.value = value;
    }
  })

  btnClear.addEventListener('click', function() {

    screen.value = '';
  })

})();





































/*
(function() {

  // global variables

  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let equal = document.querySelector('.btn-equal');
  let clear = document.querySelector('.btn-clear');


  // retrieve datas from buttons
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {

      let value = e.target.dataset.num;
      
      screen.value += value;
    })
  })
  // calculate datas with equal button

  equal.addEventListener('click', function() {

    if(screen.value === '') {
      screen.value = 'Please input a value';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })

  // clear button

  clear.addEventListener('click', function() {

    screen.value = '';
  })

})();


*/

















/*


(function() {

  //global variables

  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');

  let equal = document.querySelector('.btn-equal');
  let clear = document.querySelector('.btn-clear');


  // retrieve data from buttons

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      
      let value = e.target.dataset.num;
      console.log(value);

      screen.value += value;
    })
  })

  // calculate data with equal button

  equal.addEventListener('click', function() {

    if(screen.value === '') {
      screen.value = 'Please input a value';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }

  })

  // reset button

  clear.addEventListener('click', function() {

    screen.value = '';
  })

})();


*/
/*
(function() {
 
  //global variables

  const inputScreen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn')
 
  const equalButton = document.querySelector('.btn-equal');
  const clearButton = document.querySelector('.btn-clear');


  // retrieve data from buttons
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {

      let buttonValue = e.target.dataset.num;
      console.log(buttonValue)

      // get value on screen
      inputScreen.value += buttonValue;

    })
  })

   // get value equal button

   equalButton.addEventListener('click', function() {

  if(inputScreen.value === '') {
    inputScreen.value = 'Please enter a value';
  } else {
    let answer = eval(inputScreen.value);
    console.log('check answer: ' + answer);
    inputScreen.value = answer;
  }
  
})

// get value reset button

clearButton.addEventListener('click', function() {

// reset screen

inputScreen.value = '';

})
  
 
})();
*/

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