$(document).ready(()=>{
 
  $('.kiki').click(()=>{
    $('.dre').toggle();
    $('.design').toggle();
  });

 $('.development').click(()=>{
   $('.dev').toggle();
   $('.dvlp').toggle();

 });

$('.management').click(()=>{
  $('.prd').toggle();
  $('.product').toggle();

});



});






function message (){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var msg = document.getElementById('msg');
  var x = document.getElementById('para');


  if (name.value === "" || msg.value === '') {
    alert('please leave a message')
  } else {
    x.innerText = (`${[name.value]} we have received your message.Thank you for reaching out to us`)
  }
}


const form = document.getElementById('sbb');

form.addEventListener('click', function(event){

  event.preventDefault();
  
  message();
  
  });