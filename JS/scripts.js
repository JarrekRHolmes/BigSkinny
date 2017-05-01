//Produced by Jarrek Holmes//
//March 26, 2017//
var check = 2;
var type = "bifold";
var wallet_color = "blue";


//--- Nav-Bar Beginning --//
function current(nav){
	document.getElementById(nav).style.color = "white";
}

function highlight(nav){
	document.getElementById(nav).style.color = "white";
}

function lowlight(nav){
		document.getElementById(nav).style.color = "#A6A6A6";
}

//--- Nav-Bar End ---//

// -- Product --  //

function color(image){
	if(image == "preload-01"){
		document.getElementById(image).style.backgroundImage = "url('Images/men_wallet_color.png')"
	}
	if(image == "preload-02"){
		document.getElementById(image).style.backgroundImage = "url('Images/clip_color.png')"
	}
	if(image == "preload-03"){
		document.getElementById(image).style.backgroundImage = "url('Images/women_wallet_color.png')"
	}
	if(image == "preload-04"){
		document.getElementById(image).style.backgroundImage = "url('Images/travel.png')"
	}
}

function uncolor(image){
	if(image == "preload-01" && check != 1){
		document.getElementById(image).style.backgroundImage = "url('Images/men_wallet.png')"
	}
	if(image == "preload-02" && check != 2){
		document.getElementById(image).style.backgroundImage = "url('Images/clip.png')"
	}
	if(image == "preload-03" && check != 3){
		document.getElementById(image).style.backgroundImage = "url('Images/women_wallet.png')"
	}
	if(image == "preload-04" && check != 4){
		document.getElementById(image).style.backgroundImage = "url('Images/travel_wallet.png')"
	}
}

function show_div(div){
	document.getElementById('mg').style.display = "none";
	document.getElementById('wg').style.display = "none";
	document.getElementById('tg').style.display = "none";
	document.getElementById('cg').style.display = "none";

	document.body.style.height = "96%";

	document.getElementById('desc1').style.visibility = "visible";
	document.getElementById('my_line').style.visibility = "visible";
	document.getElementById(div).style.display = "block";
}

function hide_div(){
	document.getElementById('mg').style.display = "none";
	document.getElementById('wg').style.display = "none";
	document.getElementById('tg').style.display = "none";
	document.getElementById('cg').style.display = "none";

	document.getElementById('desc1').style.visibility = "hidden";
	document.getElementById('my_line').style.visibility = "hidden";
}

function show_image(image){
	if(image == "preload-01"){
		document.getElementById('preload-02').style.backgroundImage = "url('Images/clip.png')";
		document.getElementById('preload-03').style.backgroundImage = "url('Images/women_wallet.png')";
		document.getElementById('preload-04').style.backgroundImage = "url('Images/travel_wallet.png')";
		document.getElementById(image).style.backgroundImage = "url('Images/men_wallet_color.png')";
		check = 1;
	}
	if(image == "preload-02"){
		document.getElementById('preload-01').style.backgroundImage = "url('Images/men_wallet.png')";
		document.getElementById('preload-03').style.backgroundImage = "url('Images/women_wallet.png')";
		document.getElementById('preload-04').style.backgroundImage = "url('Images/travel_wallet.png')";
		document.getElementById(image).style.backgroundImage = "url('Images/clip_color.png')";
		check = 2;
	}
	if(image == "preload-03"){
		document.getElementById('preload-04').style.backgroundImage = "url('Images/travel_wallet.png')";
		document.getElementById('preload-02').style.backgroundImage = "url('Images/clip.png')";
		document.getElementById('preload-01').style.backgroundImage = "url('Images/men_wallet.png')";
		document.getElementById(image).style.backgroundImage = "url('Images/women_wallet_color.png')";
		check = 3;
	}
	if(image == "preload-04"){
		document.getElementById('preload-03').style.backgroundImage = "url('Images/women_wallet.png')";
		document.getElementById('preload-02').style.backgroundImage = "url('Images/clip.png')";
		document.getElementById('preload-01').style.backgroundImage = "url('Images/men_wallet.png')";
		document.getElementById(image).style.backgroundImage = "url('Images/travel.png')";
		check = 4;
	}
	if(image == "preload-05"){
		document.getElementById('preload-04').style.backgroundImage = "url('Images/travel_wallet.png')";
		document.getElementById('preload-03').style.backgroundImage = "url('Images/women_wallet.png')";
		document.getElementById('preload-02').style.backgroundImage = "url('Images/clip.png')";
		document.getElementById('preload-01').style.backgroundImage = "url('Images/men_wallet.png')";
		check = 0;
	}
}

// -- End Product -- //

//Jarrek Code //

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//End Jarrek Code //

function changetype(newtype)
{      
	type = newtype;
	updateImage();                
}

function changecolor(newcolor)
{
	wallet_color = newcolor;
	updateImage();
}

function updateImage()
{    
	var filename = type.concat("-", wallet_color);
	var filepath = "Images/".concat(filename,".jpg"); 
	document.getElementById('custom-wallet').src= filepath;

}