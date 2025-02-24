var btn=document.querySelector('button');
var h3=document.querySelector('h3');
var fu=0;

btn.addEventListener('click',function(){
    if(fu==0){
    h3.textContent='Friends';
    h3.style.color='green';
    btn.textContent='Remove';
    fu++;
    }
    else{
    h3.textContent='Stranger';
    h3.style.color='red';
    btn.textContent='Add Friends';
    fu--;
    }
})