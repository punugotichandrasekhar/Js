function Cal(){
  let Bill = document.querySelector('.bill').value;
  let Tippercent = document.querySelector('.tip').value;
  let Tip = (Number(Bill) * Number(Tippercent))/100;
  document.querySelector('.Total-amt').innerHTML = (Number(Bill)+Tip).toFixed(2);
}