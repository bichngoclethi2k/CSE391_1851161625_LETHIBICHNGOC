var fruit =document.getElementById('txtFruit');
 var showFruit =document.getElementById('btnFruit');
 var imgFruit =document.getElementById('imgFruit');

 showFruit.addEventListener('click',showResult);
 function showResult(){
     var getFruit =fruit.value;
     imgFruit.setAttribute('src','img/'+getFruit+'.jpg');
     this.style.backgroundColor='pink';
     alert(" This is picture")
 }