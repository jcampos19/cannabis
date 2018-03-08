$(document).ready(function(){
'use strict';
	
	/*adding table filtering*/
	if ($('.tablefilter').length)  {
		$('.tablefilter').DataTable({
			"oLanguage": {
				"sLengthMenu": "Bargains Displayed: _MENU_",
				"sSearch": "",
				"sSearchPlaceholder": "Bargain Search"
			}
		});
	}

	if ($('.tableFavorites').length)  {
		$('.tableFavorites').DataTable({
			"oLanguage": {
				"sLengthMenu": "Show _MENU_",
				"sSearch": "",
				"sSearchPlaceholder": "Search Favorites"
			}
		});
	}
	
	/*vendor mobile sidebarshow*/
	$('#sidebar-toggle').click(function(){
		if ($('#close-sidebar.show-filter').length) {
			$("#close-sidebar").removeClass("show-filter");
			document.getElementById("close-sidebar").style.width = "0px";
		} 
		else {
			$("#close-sidebar").addClass("show-filter");
			document.getElementById("close-sidebar").style.width = "250px";
		}
	});
	
	/*customer mobile sidebarshow*/
	$('#cSidebar-toggle').click(function(){
		if ($('#close-sidebar.show-filter').length) {
			$("#close-sidebar").removeClass("show-filter");
			document.getElementById("close-sidebar").style.width = "0px";
			document.getElementById("close-sidebar").style.paddingLeft = "0px";
		} 
		else {
			$("#close-sidebar").addClass("show-filter");
			document.getElementById("close-sidebar").style.width = "180px";
			document.getElementById("close-sidebar").style.paddingLeft = "30px";
		}
	});
});


/* exported chkStarRating */
/* exported enableSMS */
/* exported showSocialMedia */
/* exported copyText */
/* exported applyCode*/


function chkStarRating() {
	'use strict';

	if ($('.starsDisabled').length) {
		$(".StarRatings").removeClass("starsDisabled");
	}
	else {
		$(".StarRatings").addClass("starsDisabled");	
	}	
}

function enableSMS() {
	'use strict';
	alert("Your message has been sent!");
}

function showSocialMedia() {
	'use strict';
	document.getElementById("shareDropdown").classList.toggle("show");
}

function copyText() {
	'use strict';
  /* Get the text field */
  var copyText = document.getElementById("generatedUrl");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("Copy");
}

function applyCode() {
	'use strict';
	alert("Promo Code has been applied");
} 
