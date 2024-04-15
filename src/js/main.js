
let menu_icon = document.querySelector('.menu_icon');
let bars = document.querySelector('.bars');
let times = document.querySelector('.times');
let times_icon = document.querySelector('.times_icon');
let navbar_wrapper = document.querySelector('.navbar_wrapper');

// navbar handle responsive
menu_icon.addEventListener('click', ()=>{
    navbar_wrapper.classList.toggle('-left-4');
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');

})