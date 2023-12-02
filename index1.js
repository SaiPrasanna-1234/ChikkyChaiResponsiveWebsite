let barToggler=document.getElementsByClassName('nav-toggler')[0];
let barList=document.getElementsByClassName('class2');
barToggler.addEventListener('click',function(){
    for(var i=0; i<barList.length; i++)
        barList[i].classList.toggle('active');
})
