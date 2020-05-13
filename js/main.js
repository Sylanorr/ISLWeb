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

// Fonction pour changer icone du menu Hamburger au clic
function changeImage() {
	var minus = document.getElementsByClassName("imgClickAndChange")[0];

	if(minus.src == "https://sylanorr.github.io/ISLWeb/img/hamburgerMenu.svg"){
		minus.src = "https://sylanorr.github.io/ISLWeb/img/hamburgerMenuExit.svg";
	}
	else {
		minus.src = "https://sylanorr.github.io/ISLWeb/img/hamburgerMenu.svg";
	}
}