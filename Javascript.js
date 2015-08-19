// Nav bar 
$('.handle').on('click', function(){
$('nav ul').toggleClass('showing');
});

function changeBG(el,bg,cov,cen) {
	var elem = document.getElementById(el);
	elem.style.transition = "background 2.0s linear 2s"
	elem.style.background = bg;
	elem.style.background = cov;
	elem.style.background = cen;
}