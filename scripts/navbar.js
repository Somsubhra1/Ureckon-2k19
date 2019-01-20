var nav_btn = document.querySelector('.nav_btn');
var main_container = document.querySelector('.main_container');
var nav_item = document.querySelectorAll('.nav_item');
var nav_btn_bars = document.querySelectorAll('.nav_btn_bar');
nav_btn.addEventListener("click", navBtnClick);

function navBtnClick(){
    main_container.classList.toggle('pers_view_on');
    main_container.classList.toggle('pers_view_off');
    for(var i=0;i<nav_item.length;i++) nav_item[i].classList.toggle("nav_bar_open");
    
    nav_btn_bars[0].classList.toggle('open_rotate_top_bar');
    nav_btn_bars[2].classList.toggle('open_rotate_bottom_bar');
    nav_btn_bars[1].classList.toggle('open_hide_middle_bar');
}   


