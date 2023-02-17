
let divs = document.querySelectorAll('.color');
let box = document.getElementById('box');
console.log(localStorage.getItem('color'));
window.onload =()=>{
    if(localStorage.getItem('color') != null){
        box.style.backgroundColor = localStorage.getItem('color');
        divs.forEach((div)=>{
          if(div.getAttribute('box-color')==localStorage.getItem('color')){
            div.classList.add('active');
          }
        })
    }
   else{
    localStorage.setItem('color' , box.getAttribute('box-color'));
   }
};
divs.forEach((div)=>{
    div.addEventListener('click' , ()=>{
      box.style.backgroundColor = div.getAttribute('box-color')
      divs.forEach((d)=>{
        d.classList.remove('active');
      })
      div.classList.add('active');
      localStorage.removeItem('color')
      localStorage.setItem('color' , div.getAttribute('box-color'));
      box.setAttribute('box-color' , div.getAttribute('box-color') )
      console.log(box.getAttribute('box-color'));
    });
})

