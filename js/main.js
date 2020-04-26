var menuHam = document.getElementById("menuHamburger");
var menuMain = document.getElementById("mainMenu");

if(menuHam != null && menuMain!= null) {
	menuHam.addEventListener('click', function(e){
		if(menuMain.className == 'l-main-nav is-active') {
			menuMain.className = 'l-main-nav';
		}
		else {
			menuMain.className = 'l-main-nav is-active';
		}
	});
}
else {
	alert('un des deux éléments pas présents');
}