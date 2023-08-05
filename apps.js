var bars=document.getElementById('bars');
var cross=document.getElementById('cross');

bars.addEventListener('click',function(){
	var menuItems=document.querySelector('.menu-items');
	menuItems.classList.toggle('active');
})
cross.addEventListener('click',function(){
	var menuItems=document.querySelector('.menu-items');
	menuItems.classList.remove('active');
})
// sticky navbar javascript code below here
window.addEventListener('scroll',function(){
    const navbarSticky=document.querySelector('.container');
    navbarSticky.classList.toggle("sticky",window.scrollY>0);

});






