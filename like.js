function like(){
  let like_button = document.querySelector('.like-logo');
  let desc = document.querySelector('.description');
  if(desc.innerText == "I am the above button description"){
  desc.innerText = "I was Liked.";
  like_button.style.color = "red";
  }
  else if(desc.innerText == "I was Liked."){
    desc.innerText = "I was DisLiked.";
    like_button.style.color = "black";
  }
  else{
    desc.innerText = "I was Liked.";
    like_button.style.color = "red";
  }
}