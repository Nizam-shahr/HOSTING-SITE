const form = document.querySelector('.signup-form');
var input = document.querySelector('#first-name');
var input = document.querySelector('#last-name');
var input = document.querySelector('#e-mail');
var input = document.querySelector('#password');
const buttons = document.querySelector('.button')

buttons.addEventListener('click',function(){
    if(input.value != ''){
    alert('user signed in');  
    } else{
        alert('please fill the details')
    }
   
    console.log('form')
});

// alert('you are welcome');