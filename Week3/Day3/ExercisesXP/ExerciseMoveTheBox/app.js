function myMove(){
   let div = document.querySelector('#animate');
   let pos = 0;

  let id = setInterval(()=>{  
      div.style.left = pos + "px";
      pos++;
      pos == 350 && clearInterval(id);
  }, 5);
   
}