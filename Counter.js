let Initval = JSON.parse(localStorage.getItem('value'));
document.querySelector('.Display-count').innerHTML = Initval;
function Decrement(){
  Initval -= 1;
  document.querySelector('.Display-count').innerHTML = Initval;
  localStorage.setItem('value',JSON.stringify(Initval));
}
function Increment(){
  Initval = Number(Initval);
  Initval += Number('1');
  document.querySelector('.Display-count').innerHTML = Initval;
  localStorage.setItem('value',JSON.stringify(Initval));
  
}
