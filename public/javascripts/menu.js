

// add an active class to the navigation menu
$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});


$(function () {
    function initMap() {
        var location = new google.maps.LatLng(41.1675332, -89.3057313);
        var map = document.getElementById('map');
        var mapDetails = {
			center: location, zoom: 7, panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map, mapDetails);	
		var markerImg = '/img/marker.png';
        var marker = new google.maps.Marker({position: location, map: map, icon: markerImg
        });
       var address = '<div class="info-window">' +
                '<h3>Putnam County Conservation Area</h3>' +
                '<div class="info-content">' +
                '<p> 4526 E 1000th St, Hennepin, IL 61327, USA</p>' +
                '</div>' +
                '</div>';
        var info = new google.maps.InfoWindow({
            content: address
        });
        marker.addListener('click', function(){
            info.open(map, marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', initMap);
});



$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
});


// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});


// Display images on the Gallery page according to the filter
$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery_img").fadeTo(100, 0.1);
$("#gallery_img div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery_img").fadeTo(300, 1);
}, 300);
});
});



// Get the modal for the login option
var modal = document.getElementById('login_modal');

// Close the modal for the login option when the user clicks outside of the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};




// Tickets price calculations


/** global variables: vNumber is the number of selected VIP tickets, bNumber is the number of selected Basic tickets 
*	pNumber is the number of selected Pro tickets, var all_tickets_no is the number of all selected ticket types
*/
var vNumber=0;
var bNumber=0;
var pNumber=0;
//var all_tickets_no = 0;

/** Global variables: postNumber is the number of selected posters, stickNumber is the number of selected stickers 
*	badgNumber is the number of selected button badges, var tsNumber is the number of all selected t-shirts,
* 	ttNumber is the number of tank tops and wbNumber is the number of wristbands, 
*	all_merch_no is the number of all selected merchandise items
*/
var postNumber = 0;
var stickNumber = 0;
var badgNumber = 0;
var tsNumber = 0;
var ttNumber = 0;
var wbNumber = 0;
var all_merch_no = 0;

// update the number of selected VIP passes
/**function updateDisplayVIP(vN){
*	//alert("i am in updateDispayVIP vNumber is + vNumber ");
*	var vipNumber= vNumber;
*	//alert("i am in updateDispayVIP vipNumber is  + vipNumber");
*	//updateDisplayTickets();
*}
*/

/** update the number of selected Pro tickets
*function updateDisplayPro(pNumber){
*	var proNumber= pNumber;
*	updateDisplayTickets();
*}
*/
// update the number of selected Basic tickets
/**function updateDisplayBas(bNumber){
*	var basNumber= bNumber;
*	updateDisplayTickets();	
*}
*/

// Get the selected number of VIP passes from the drop down list; the VIP passes label and price
function vip_total() {
		var vip_no = document.getElementById("vip_pass").value;
		vNumber = parseInt(vip_no);
				//alert("in vip_total  - vNumber " + vNumber);
		var vippass_text = document.getElementById("vip_label").textContent;
		//alert("vip_text " + vip_text);

		updateVIPBasket(vNumber, vippass_text);
		setCookie("vip_total", vNumber,1);
		//updateDisplayTickets();	
		//alert("go to updateVIPBasket");
	};
	
// get the selected number of Pro tickets from the drop down list; the Pro tickets label and price
function pro_total() {
		var pro_no = document.getElementById("pro").value;	
		pNumber = parseInt(pro_no);
		var protick_text = document.getElementById("pro_label").textContent;
		
		updateProBasket(pNumber, protick_text);
		//updateDisplayTickets();
		setCookie("pro_total", pNumber,1);
		//alert("go to updateProBasket");
		
	};

// get the selected number of Basic tickets from the drop down list; the Basic tickets label and price	
function basic_total() {
		var basic_no = document.getElementById("basic").value;		
		bNumber = parseInt(basic_no);	
		var bas_text = document.getElementById("basic_label").textContent;
		updateBasicBasket(bNumber, bas_text);
		//updateDisplayTickets();
		setCookie("basic_total", bNumber,1);
				//alert("go to updateBasicBasket");
	};


// Get the selected number of posters from the drop down list; get the posters label and price
function post_total() {
		var post_no = document.getElementById("poster").value;
		postNumber = parseInt(post_no);
				//alert("in post_total  - postNumber " + postNumber);
		var post_text = document.getElementById("post_label").textContent;
		//alert("postpass_text " + postpass_text);

		updatePostBasket(postNumber, post_text);
		setCookie("post_total", postNumber,1);
		//updateDisplayMerch();	
		//alert("go to updatePostBasket");
	};


// Get the selected number of stickers from the drop down list; get the stickers label and price
function stick_total() {
		var stick_no = document.getElementById("sticker").value;
		stickNumber = parseInt(stick_no);
				//alert("in stick_total  - stickNumber " + stickNumber);
		var stick_text = document.getElementById("stick_label").textContent;
		//alert("stick_text " + stick_text);

		updateStickBasket(stickNumber, stick_text);
		setCookie("stick_total", stickNumber,1);
		//updateDisplayMerch();	
		//alert("go to updateStickBasket");
	};


// Get the selected number of button badges from the drop down list; get the button badge label and price
function button_total() {
		var button_no = document.getElementById("btnbadge").value;
		
		badgNumber = parseInt(button_no);
				//alert("in button_total  - badgNumber " + badgNumber);
		var button_text = document.getElementById("btn_label").textContent;
		//alert( "in button_total button_text is " + button_text);
		//alert("button_text " + button_text);

		updateButtonBasket(badgNumber, button_text);
		setCookie("button_total", badgNumber,1);
		//updateDisplayMerch();	
		//alert("go to updateButtonBasket");
	};

// Get the selected number of T-shirts from the drop down list; get the T-shirts label and price
function tshirt_total() {
		var tshirt_no = document.getElementById("tshirt").value;
		tsNumber = parseInt(tshirt_no);
				//alert("in tshirt_total  - tsNumber " + tsNumber);
		var tshirt_text = document.getElementById("tsh_label").textContent;
		var tsh_size = document.getElementById("tshirt_size").value;
		//alert("tshirt_text " + tshirt_text);

		updateTshirtBasket(tsNumber,tshirt_text,tsh_size);
		setCookie("tshirt_total", tsNumber,1);
		//updateDisplayMerch();	
		//alert("go to updateTshirtBasket");
	};

// Get the selected number of tank tops from the drop down list; get the tank top label and price
function top_total() {
		var top_no = document.getElementById("tshirt_nosl").value;
		topNumber = parseInt(top_no);
				//alert("in top_total  - topNumber " + topNumber);
		var top_text = document.getElementById("tank_label").textContent;
		//alert("top_text " + top_text);
		var top_size = document.getElementById("tshirt_nosl_size").value;

		updateTopBasket(topNumber,top_text, top_size);
		setCookie("top_total", topNumber,1);
		//updateDisplayMerch();	
		//alert("go to updateTopBasket");
	};


// Get the selected number of wristbands from the drop down list; get the wristbands label and price
function wband_total() {
		var wband_no = document.getElementById("wistb").value;
		wbNumber = parseInt(wband_no);
				//alert("in wband_total  - wbNumber " + wbNumber);
		var wb_text = document.getElementById("wb_label").textContent;
		//alert("wb_text " + wb_text);

		updateWbBasket(wbNumber,wb_text);
		setCookie("wband_total", wbNumber,1);
		//updateDisplayMerch();	
		//alert("go to updateWbBasket");
	};



/** Display the number of selected tickets on the nav bar in a badge element next to the shopping basket
*	vNumber is the number of VIP tickets, 
*	bNumber is the number of Basic tickets, 
* 	pNumber is the number os Pro tickets
*/
/*
function updateDisplayTickets(){
			alert("i am in updateDispayTickets vNumber is " + vNumber +" pNumber "+ pNumber +" bNumber "+ bNumber);
	//var localvip = vNumber;
	//var localpro = pNumber;
	//var localbas = bNumber;
	
	all_tickets_no = vNumber + bNumber + pNumber;
	
	//document.getElementById("basket_id").innerHTML =  all_tickets_no;
			alert("I am in updateDisplayTicket all_tickets_no is " + all_tickets_no);
	return all_tickets_no;
}
*/

// Shop page price calculations

/** 
*	Global variables: 
*	postNumber is the number of selected posters, 
* 	stickNumber is the number of selected stickers, 
*	badgNumber is the number of selected button badges
*	tsNumber is the number of selected button badges
*	ttNumber is the number of selected button badges
*	wristbNumber is the number of selected button badges
*	all_merch_no is the number of all selected merchandise items
*/


/** 
* Display the number of selected merchandise items on the nav bar in a badge element next to the shopping basket
*
*/
/*
function updateDisplayMerch(){
	alert("i am in updateDisplayMerch  " );
	var all_merch_no;
	all_merch_no = postNumber + stickNumber + badgNumber + tsNumber + ttNumber + wbNumber;
	//document.getElementById("basket_id").innerHTML = all_merch_no;
	alert("I am in updateDisplayMerch all_merch_no " + all_merch_no);
	return all_merch_no;
	
}


*/

//var cart_all = document.getElementById("basket_id").innerHTML = cart_merch + cart_tick;
//alert("what is cart_all value" + cart_all);

//function updateBasket(all_basket){
//	var total_b = all_basket;
//	document.getElementById("basket_id").innerHTML = cart_all + total_b;
//}

/** Create a Cookie for the number of selected tickets 
* 	and items on the Shop page that expires in a set number of days
*
*	@param c_name - cookie name
*	@param c_value - cookie value
*	@param c_days - numbers of days after which the cookie expires
*/
function setCookie(c_name, c_value, c_days){
	//check the date when the cookie should expire
	//alert("i am in set cookie first");
	var exp = new Date();
		//alert("set cookie 2");
	exp.setTime(exp.getTime()+(c_days*24*60*60*1000));
			//alert("set cookie 3");
	var expires = "expires=" + exp.toUTCString();
			//	alert("set cookie fourth c_value is " + c_value);
	document.cookie = c_name + "=" + c_value + ";" + expires + ";path=/";
	//alert("c_name " + c_name +' c_value '+ c_value + ' c_days ' +c_days);
}

/** 
*	Return the value of the cookie
*	@param c_name - cookie with the name c_name
*	@returns cookie value if the cookie name is found, otherwise return ""
*/
function getCookie(c_name) {
	//alert("i am in get cookie first");
	//Get the text to decode
  var c_n = c_name + "=";
  // Decode the cookie
  	//alert("get cookie second c_n is " + c_n);
  var decode = decodeURIComponent(document.cookie); 
  // Split document.cookie at ';' and create an array
    	//alert("get cookie 3");
  var c_split = decode.split(';');
  // Read out values in the array and search for the cookie
      	//alert("get cookie 4");
	var c_splt_lgth = c_split.length; 
  for(var i = 0; i <c_splt_lgth; i++) {

    var ci = c_split[i];
    while (ci.charAt(0) == ' ') {
      ci= ci.substring(1);
    }
	// Find the cookie with the name c_name and return its value
    if (ci.indexOf(c_n) == 0) {
			  	        	//alert("get cookie 5");
      return ci.substring(c_n.length, ci.length);

    }
  }
  	  	        	//alert("get cookie 6");
  return "";
}

/**
* Check if the cookie 'in_basket' exists; 
* Show the number of selected tickets 
* and items in the badge element next to the basket icon in the nav bar
*/
var all_basket = 0;
var cart_tick = 0;

// Return numbers of selected tickets from cookies
function ticketsNumbers(){
	var vip = getCookie("vip_total");
	var pro = getCookie("pro_total");
	var basic = getCookie("basic_total");
	//alert("alert vip " + vip);
		//alert("in ticketsNumber from the cookie vip is " + vip +" pro "+ pro + " basic "+ basic);
	var vip_n = parseInt(vip) || 0;
	var pro_n = parseInt(pro) || 0;
	var basic_n = parseInt(basic) || 0;
	

	//alert("in ticketsNumber parseInt  vip_n " + vip_n +" pro_n "+ pro_n + " basic_n "+ basic_n);
	cart_tick = vip_n + pro_n + basic_n;

	return cart_tick;
}

var cart_merch = 0;

// Return numbers of selected merchandise items from cookies
function itemsNumbers(){
	var poster = getCookie("post_total");
	var sticker = getCookie("stick_total");
	var bbadge = getCookie("button_total");
	var tshirt = getCookie("tshirt_total");
	var ttop = getCookie("top_total");
	var wband = getCookie("wband_total");
	
	//alert("alert poster " + poster);

		
		//alert("in itemsNumber from the cookie sticker " + sticker);
	var poster_n = parseInt(poster) || 0;
	var sticker_n = parseInt(sticker) || 0;
	var bbadge_n = parseInt(bbadge) || 0;
	var tshirt_n = parseInt(tshirt) || 0;
	var ttop_n = parseInt(ttop) || 0;	
	var wband_n = parseInt(wband) || 0;

	//alert("in merchNumber parseInt  poster_n " + poster_n);
	cart_merch = poster_n + sticker_n  + bbadge_n + tshirt_n + ttop_n + wband_n;

	return cart_merch;
}




/**
		* Local variables - cart_merch is the number of all selected merchandise items, 
		* cart_tick is the number of all selected tickets, 
		* merch_tick is the number of all selected merchandise items and tickets
		 */
function checkCookie() {
	var all_basket = 0;
	
	all_basket = getCookie("in_basket");
	var cart_tickets = ticketsNumbers();
	var cart_mitems = itemsNumbers();
	
	//alert("all_basket " + all_basket + " cart_tickets " + cart_tickets +" cart_mitems "+ cart_mitems);

	//alert("in checkCookie parse from the cookie vip_n is " + vip_n +" pro_n "+ pro_n +" basic_n "+ basic_n);
		
	//alert("in checkCookie first - all_basket from the cookie is " + all_basket +" vip_n "+ vip_n);
							// Check if the cookie exists
		//var cart_merch = updateDisplayMerch(); 
		//var cart_tick = updateDisplayTickets();
		 
		var merch_tick = cart_mitems + cart_tickets;
								//alert("I am in checkCookie after first: merch_tick is " + merch_tick + " cart_tickets is " + cart_tickets);
			if(all_basket != "" && all_basket != null && all_basket !='undefined' && all_basket !=NaN && merch_tick !=NaN){
				all_basket = parseInt(all_basket);

							//alert("in checkCookie second: - all_basket from cookie is " + all_basket);
				//all_basket = all_basket + merch_tick;
				all_basket = merch_tick;
								//alert(" in checkcookie third: all_basket after adding tickets and merch: all_basket is = " + all_basket +  ' merch_tick ='+  merch_tick );

				if(all_basket !=0 && all_basket !=NaN ){
							//alert ("in checkcookie fourth: all_basket is not undefined not empty so display the number to the badge: all basket is " + all_basket);
					document.getElementById("basket_id").innerHTML = all_basket;
				}
				if(all_basket ==0){
					document.getElementById("basket_id").innerHTML = "";
				
			}}
			else{
				//alert (" else in checkCookie : all_basket is " + all_basket +" merch_tick "+ merch_tick); 
				all_basket = merch_tick;
				//alert (" else in checkCookie fifth: all_basket is " + all_basket); 
				
				if(all_basket !=0 && all_basket !=NaN ){
					//alert (" else in checkCookie sixth - display the number to the badge: all_basket is " + all_basket); 
				document.getElementById("basket_id").innerHTML = all_basket;
				}
			}
			//alert ("I am in checkCookie seventh -set cookie with a value all_basket = "  + all_basket);
			setCookie("in_basket", all_basket,1);
			
			
	
	
}

// check if the cookie basket_list exists and update the Basket page
/** 
*	Global variables
*	vip_text references the label text of the VIP passes,
*	pro_text references the label text of the Pro tickets,
*	basic_text references the label text of the Basic tickets
*/
var vip_text = [];
var pro_text = [];
var basic_text = [];

var vip_subt = 0;
var pro_subt= 0;	
var	bas_subt= 0;

/** 
*	Global variables:
*	pt_text references the label text of the posters,
*	st_text references the label text of the stickers,
*	bd_text references the label text of the button badges,
*	ts_text references the label text of the T-shirts,
*	tt_text references the label text of the top tanks,
*	wb_text references the label text of the wristbands.
*/
var pt_text = [];
var st_text = [];
var bd_text = [];
var ts_text = [];
var tt_text = [];
var wb_text = [];

var	post_subt= 0;
var	stick_subt= 0;
var	btn_subt= 0; 
var	tsh_subt= 0;
var	tt_subt= 0;
var	wb_subt= 0;

/**
* Create an array with details about selected VIP passes:
* the number of VIP passes, label, price and subtotal
*/
function updateVIPBasket(vNo, vip_lab){
	//alert(" i am in updateVIPBasket");
	// Header cells names
	//var item = "Item";
	//var size = "Size";
	//var quant = "Quantity";
	//var pr = "Price";
	//var subt = "Subtotal";
   // var remv = "Remove";
   
 //  var html = "<table><thead><tr><th>Title</th><th>Name</th><th>Ticket</th></tr></thead><tbody>";
   
    // Selected tickets details   
	var vip_no = vNo;
				//alert("vip_no " + vip_no);
	var vip_l = vip_lab; // VIP pass label
				//alert("vip_l " + vip_no);
	
	
	var vip_split = vip_l.match(/\d+/g); // VIP pass price
	
				//alert("vip_split " + vip_split);
	var vip_dollar = "$" + vip_split;
			//alert("vip_dollar " + vip_dollar);
	var vip_float = Number(vip_split);
				//alert(" vip_float " + vip_float);
	vip_subt = vip_float*vip_no;
				//alert("vip_subt " + vip_subt);
	var vip_subtd = "$" + vip_subt
	//var vip_size = " "; // Leave the Size cell blank 
	
	
	//vip_text = [vip_l, vip_size, vip_no, vip_dollar, vip_subtd];
	vip_text = [vip_l, vip_no, vip_dollar, vip_subtd];
				//alert("vip_text " + vip_text);
		//alert(" i am in updateVIPBasket  vip_text is " + vip_text);		
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var vip_json = JSON.stringify(vip_text);
	//createTable();
	setCookie("vip_details", vip_json, 1);
	setCookie("vip_subt", vip_subt, 1)
	
	
}




/**
* Create an array with details about selected Pro tickets:
* the number of Pro tickets, label, price and subtotal
*/
function updateProBasket(pNo, pro_lab){
	//alert(" i am in updateProBasket creating table");
	// Header cells names
	//var item = "Item";
	//var size = "Size";
	//var quant = "Quantity";
	//var pr = "Price";
	//var subt = "Subtotal";
   // var remv = "Remove";
   
 //  var html = "<table><thead><tr><th>Title</th><th>Name</th><th>Ticket</th></tr></thead><tbody>";
   
    // Selected tickets details   
	var pro_no = pNo;
				//alert("pro_no " + pro_no);
	var pro_l = pro_lab; // Pro ticket label
				//alert("pro_l " + pro_no);
	
	
	var pro_split = pro_l.match(/\d+/g); // Pro ticket price
	
				//alert("pro_split " + pro_split);
	var pro_dollar = "$" + pro_split;
			//alert("pro_dollar " + pro_dollar);
	var pro_float = Number(pro_split);
				//alert(" pro_float " + pro_float);
	pro_subt = pro_float*pro_no;
				//alert("pro_subt " + pro_subt);
	var pro_subtd = "$" + pro_subt
	//var pro_size = " "; // Leave the Size cell blank 
	//pro_text = [pro_l, pro_size, pro_no, pro_dollar, pro_subtd];
	pro_text = [pro_l, pro_no, pro_dollar, pro_subtd];
				//alert("pro_text " + pro_text);
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var pro_json = JSON.stringify(pro_text);
	//alert(" i am in updateProBasket pro_text is " + pro_text);		
	setCookie("pro_details", pro_json, 1);
	setCookie("pro_subt", pro_subt, 1)
	
}

/**
* Create an array with details about selected Basic tickets
* the number of Basic tickets, label, price and subtotal
*/
function updateBasicBasket(bNo, bas_lab){
	//alert(" i am in updateBasicBasket creating table");
	// Header cells names
	//var item = "Item";
	//var size = "Size";
	//var quant = "Quantity";
	//var pr = "Price";
	//var subt = "Subtotal";
   // var remv = "Remove";
 //  var html = "<table><thead><tr><th>Title</th><th>Name</th><th>Ticket</th></tr></thead><tbody>";
    // Selected tickets details   
	var bas_no = bNo;
				//alert("bas_no " + bas_no);
	var bas_l = bas_lab; // bas ticket label
				//alert("bas_l " + bas_no);
	var bas_split = bas_l.match(/\d+/g); // bas ticket price	
				//alert("bas_split " + bas_split);
	var bas_dollar = "$" + bas_split; // add the dollar symbol
			//alert("bas_dollar " + bas_dollar);
	var bas_float = Number(bas_split);
				//alert(" bas_float " + bas_float);
	bas_subt = bas_float*bas_no;
				//alert("bas_subt " + bas_subt);
	var bas_subtd = "$" + bas_subt
	//var bas_size = " "; // Leave the Size cell blank 	
	//basic_text = [bas_l, bas_size, bas_no, bas_dollar, bas_subtd];
	basic_text = [bas_l, bas_no, bas_dollar, bas_subtd];
				//alert("bas_text " + bas_text);
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var basic_json = JSON.stringify(basic_text);
		//alert(" i am in updateBasicBasket basic_text is " + basic_text);	
	setCookie("basic_details", basic_json, 1);
	
	setCookie("basic_subt", bas_subt, 1);
	
}


/**
* Create an array with details about selected posters:
* the number, label, price and subtotal of posters
*/
function updatePostBasket(pNo, ptr_lab){
	//alert(" i am in updatePostBasket");

    // Selected posters details   
	var poster_no = pNo;
				//alert("poster_no " + poster_no);
	var p_l = ptr_lab; // Poster label
				//alert("p_l " + p_l);
	
	
	var post_split = p_l.match(/\d+/g); // Poster price
	
				//alert("post_split " + post_split);
	var post_dollar = "$" + post_split;
			//alert("post_dollar " + post_dollar);
	var post_float = Number(post_split);
				//alert(" post_float " + post_float);
	post_subt = post_float*poster_no;
				//alert("post_subt " + post_subt);
	var post_subtd = "$" + post_subt
		
	pt_text = [p_l, poster_no, post_dollar, post_subtd];
				//alert("pt_text " + pt_text);
		//alert(" i am in updatePostBasket pt_text is " + pt_text);		
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var post_json = JSON.stringify(pt_text);
	//createTable();
	setCookie("post_details", post_json, 1);
	setCookie("post_subt", post_subt, 1);
}

/**
* Create an array with details about selected stickers:
* the number, label, price and subtotal of the stickers
*/
function updateStickBasket(s_No, s_lab){
	//alert(" i am in updateStickBasket");

    // Selected posters details   
	var stk_no = s_No;
			//	alert("stk_no " + stk_no);
	var stk_l = s_lab; // Sticker label
			//	alert("stk_l " + stk_l);
	
	
	var stick_split = stk_l.match(/\d+/g); // Poster price
	
				//alert("stick_split " + stick_split);
	var stick_dollar = "$" + stick_split;
			//alert("stick_dollar " + stick_dollar);
	var stick_float = Number(stick_split);
				//alert(" stick_float " + stick_float);
	stick_subt = stick_float*stk_no;
				//alert("stick_subt " + stick_subt);
	var stick_subtd = "$" + stick_subt
		
	st_text = [stk_l, stk_no, stick_dollar, stick_subtd];
				//alert("st_text " + st_text);
		//alert(" i am in updateStickBasket st_text is " + st_text);		
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var stick_json = JSON.stringify(st_text);
	//createTable();
	setCookie("stick_details", stick_json, 1);
	setCookie("stick_subt", stick_subt, 1)
}

/**
* Create an array with details about selected button badges:
* the number, label, price and subtotal of the button badges
*/
function updateButtonBasket(b_No, b_lab){
	//alert(" i am in updateButtonBasket");

    // Selected button badge details   
	var btn_no = b_No;
			//	alert("btn_no " + btn_no);
	var btn_l = b_lab; // Button badge label
				//alert("btn_l " + btn_l);
	
	
	var btn_split = btn_l.match(/\d+/g); // Button badge price
	
				//alert("btn_split " + btn_split);
	var btn_dollar = "$" + btn_split;
			//alert("btn_dollar " + btn_dollar);
	var btn_float = Number(btn_split);
				//alert(" btn_float " + btn_float);
	btn_subt = btn_float*btn_no;
				//alert("btn_subt " + btn_subt);
	var btn_subtd = "$" + btn_subt
		
	bd_text = [btn_l, btn_no, btn_dollar, btn_subtd];
				//alert("bd_text " + bd_text);
		//alert(" i am in updateButtonBasket btn_text is " + btn_text);		
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var btn_json = JSON.stringify(bd_text);
	//createTable();
	setCookie("btn_details", btn_json, 1);
	setCookie("btn_subt", btn_subt, 1)
}


/**
* Create an array with details about selected T-shirts:
* the number, label, price and subtotal of the T-shirts
*/
function updateTshirtBasket(ts_No, ts_lab, ts_size){
	//alert(" i am in updateTshirtBasket");

    // Selected T-shirts details   
	var tsh_no = ts_No;
			//	alert("tsh_no " + tsh_no);
	var tsh_l = ts_lab; // T-shirt label
			//	alert("tsh_l " + tsh_l);
	var tsh_s = ts_size;
	//alert(" in update T-shirtBasket tsh_s " + tsh_s);
	var tsh_split = tsh_l.match(/\d+/g); // T-shirt price
	var tsh_ls;
	if(tsh_s !=""){
	tsh_ls = tsh_l + ", " + tsh_s;
	}
	else{
		tsh_ls = tsh_l;
	}
	//alert("tsh_ls " + tsh_ls);
				//alert("tsh_split " + tsh_split);
	var tsh_dollar = "$" + tsh_split;
			//alert("tsh_dollar " + tsh_dollar);
	var tsh_float = Number(tsh_split);
				//alert(" tsh_float " + tsh_float);
	tsh_subt = tsh_float*tsh_no;
				//alert("tsh_subt " + tsh_subt);
	var tsh_subtd = "$" + tsh_subt
		
	ts_text = [tsh_ls, tsh_no, tsh_dollar, tsh_subtd];
	//alert(" in updateTshirtBasket ts_text " + ts_text);
				//alert("tsh_text " + tsh_text);
		//alert(" i am in updateTshirtBasket tsh_text is " + tsh_text);		
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var tsh_json = JSON.stringify(ts_text);
	//createTable();
	setCookie("tsh_details", tsh_json, 1);
	setCookie("tsh_subt", tsh_subt, 1)
	
}

/**
* Create an array with details about selected tank tops:
* the number, label, price and subtotal of the tank tops
*/
function updateTopBasket(ttop_no, ttop_lab, ttop_size){
	//alert(" i am in updateTopBasket");

    // Selected tank tops details   
	var tt_no = ttop_no;
			//	alert("tt_no " + tt_no);
	var tt_l = ttop_lab; // Tank tops label
			//	alert("tt_l " + tt_l);
	var tt_ls;
	var tt_s = ttop_size;
	
	
	if(tt_s !=""){
	tt_ls = tt_l + ", " + tt_s;
	}
	else{
		tt_ls = tt_l 
	}	
	

	
	var tt_split = tt_l.match(/\d+/g); // Tank tops price
	
				//alert("tt_split " + tt_split);
	var tt_dollar = "$" + tt_split;
			//alert("tt_dollar " + tt_dollar);
	var tt_float = Number(tt_split);
				//alert(" tt_float " + tt_float);
	tt_subt = tt_float*tt_no;
				//alert("tt_subt " + tt_subt);
	var tt_subtd = "$" + tt_subt;
		
	tt_text = [tt_ls, tt_no, tt_dollar, tt_subtd];
				//alert("tt_text " + tt_text);
		//alert(" i am in updateTopBasket tt_text is " + tt_text);		
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var tt_json = JSON.stringify(tt_text);
	//createTable();
	setCookie("tt_details", tt_json, 1);
	setCookie("tt_subt", tt_subt, 1)
}



/**
* Create an array with details about selected tank tops:
* the number, label, price and subtotal of the tank tops
*/
function updateWbBasket(wbd_no, wbd_lab){
	//alert(" i am in updateWbBasket");

    // Selected wristbands details   
	var wb_no = wbd_no;
			//	alert("wb_no " + wb_no);
	var wb_l = wbd_lab; // Wristbands label
			//	alert("wb_l " + wb_l);
	
	
	var wb_split = wb_l.match(/\d+/g); // Tank tops price
	
				//alert("wb_split " + wb_split);
	var wb_dollar = "$" + wb_split;
			//alert("wb_dollar " + wb_dollar);
	var wb_float = Number(wb_split);
				//alert(" wb_float " + wb_float);
	wb_subt = wb_float*wb_no;
				//alert("wb_subt " + wb_subt);
	var wb_subtd = "$" + wb_subt;
		
	wb_text = [wb_l, wb_no, wb_dollar, wb_subtd];
				//alert("wb_text " + wb_text);
		//alert(" i am in updateWbBasket wb_text is " + wb_text);		
	// Convert the string into a JSON string so it can be stored and retrieved from a cookie
	var wb_json = JSON.stringify(wb_text);
	//createTable();
	setCookie("wb_details", wb_json, 1);
	setCookie("wb_subt", wb_subt, 1)
}

/**
* Display a table with selected tickets details
*/
function createTable(){
	//var current_basket = getCookie("basket_details");
		//alert("in createTable basket_details is " + basket_details);
	
	var vip_select_json = getCookie("vip_details");
	var pro_select_json = getCookie("pro_details");
	var basic_select_json = getCookie("basic_details");


	var post_select_json = getCookie("post_details");
	var stick_select_json = getCookie("stick_details");
	var badg_select_json = getCookie("btn_details");	
	var ts_select_json = getCookie("tsh_details");
	var tt_select_json = getCookie("tt_details");
	var wb_select_json = getCookie("wb_details");
	
	var vip_selection;
	var pro_selection;
	var basic_selection;
	
	var post_selection;
	var stick_selection;
	var badg_selection;
	var ts_selection;
	var tt_selection;
	var wb_selection;
	
	if (vip_select_json !=""){
		vip_selection = JSON.parse(vip_select_json);
	}
	if (pro_select_json !=""){
		pro_selection = JSON.parse(pro_select_json);
	}
	if (basic_select_json !=""){
		basic_selection = JSON.parse(basic_select_json);
	}
	if (post_select_json !=""){
		post_selection = JSON.parse(post_select_json);
	}
	if (stick_select_json !=""){
		stick_selection = JSON.parse(stick_select_json);
	}
	if (badg_select_json !=""){
		badg_selection = JSON.parse(badg_select_json);
	}
	
	if (ts_select_json !=""){
		ts_selection = JSON.parse(ts_select_json);
	}
	
	if (tt_select_json !=""){
		tt_selection = JSON.parse(tt_select_json);
	}
	
	if (wb_select_json !=""){
		wb_selection = JSON.parse(wb_select_json);
	}
	
	
	//alert( " i am in createTable vip_selection is -" + vip_selection +" pro_selection "+ pro_selection +" basic_selection "+ basic_selection);
	//vip_selection = updateVIPBasket(vNo, vip_lab);	
	//var tickets = vip_selection.concat(pro_selection, basic_selection);
	var all_result = "";
	// if VIP passes were selected add a row with their details
	if(vip_selection && vip_selection.length)
	{
		for(var i=0; i<vip_selection.length; i++) 
		{
			all_result += "<td>"+vip_selection[i]+"</td>";
		}
		all_result +="<td><button class=\"remove\" onclick=\"deleteRowVIP(this)\"><i class=\"fa fa-remove\"></i></button></td></tr><tr>";
	}
	// if Pro tickets were selected add a row with their details
	if(pro_selection && pro_selection.length)
	{
		for(var i=0; i<pro_selection.length; i++)
		{ 
	
			all_result += "<td>"+pro_selection[i]+"</td>" ;
		}
		all_result +="<td><button class=\"remove\" onclick=\"deleteRowPro(this)\"><i class=\"fa fa-remove\"></i></button></td></tr><tr>";
	}
	
	// if Basic tickets were selected add a row with their details
	if(basic_selection && basic_selection.length)
	{
		for(var i=0; i<basic_selection.length; i++)
		{
	
			all_result +="<td>"+basic_selection[i]+"</td>" ;
				//alert("all_result1 " + all_result + " all_text[i] " + all_text[i] );
		}
			all_result +="<td><button class=\"remove\" onclick=\"deleteRowBasic(this)\"><i class=\"fa fa-remove\"></i></button></td></tr>";
    }
	
	// If Posters were selected add a row with their details
	if(post_selection && post_selection.length)
	{
		for(var i=0; i<post_selection.length; i++)
		{
	
			all_result +="<td>"+post_selection[i]+"</td>" ;
				//alert("all_result1 " + all_result + " all_text[i] " + all_text[i] );
		}
			all_result +="<td><button class=\"remove\" onclick=\"deleteRowPost(this)\"><i class=\"fa fa-remove\"></i></button></td></tr>";
    }
	
		// If Stickers were selected add a row with their details
	if(stick_selection && stick_selection.length)
	{
		for(var i=0; i<stick_selection.length; i++)
		{
	
			all_result +="<td>"+stick_selection[i]+"</td>" ;
				//alert("all_result1 " + all_result + " all_text[i] " + all_text[i] );
		}
			all_result +="<td><button class=\"remove\" onclick=\"deleteRowStick(this)\"><i class=\"fa fa-remove\"></i></button></td></tr>";
    }

	// If Badges were selected add a row with their details
	if(badg_selection && badg_selection.length)
	{
		for(var i=0; i<badg_selection.length; i++)
		{
	
			all_result +="<td>"+badg_selection[i]+"</td>" ;
				//alert("all_result1 " + all_result + " all_text[i] " + all_text[i] );
		}
			all_result +="<td><button class=\"remove\" onclick=\"deleteRowBadg(this)\"><i class=\"fa fa-remove\"></i></button></td></tr>";
    }

	
		// If T-shirts were selected add a row with their details
	if(ts_selection && ts_selection.length)
	{
		for(var i=0; i<ts_selection.length; i++)
		{
	
			all_result +="<td>"+ts_selection[i]+"</td>" ;
				//alert("all_result1 " + all_result + " all_text[i] " + all_text[i] );
		}
			all_result +="<td><button class=\"remove\" onclick=\"deleteRowTs(this)\"><i class=\"fa fa-remove\"></i></button></td></tr>";
    }

			// If tank tops were selected add a row with their details
	if(tt_selection && tt_selection.length)
	{
		for(var i=0; i<tt_selection.length; i++)
		{
	
			all_result +="<td>"+tt_selection[i]+"</td>" ;
				//alert("all_result1 " + all_result + " all_text[i] " + all_text[i] );
		}
			all_result +="<td><button class=\"remove\" onclick=\"deleteRowTt(this)\"><i class=\"fa fa-remove\"></i></button></td></tr>";
    }

				// If wristbands were selected add a row with their details
	if(wb_selection && wb_selection.length)
	{
		for(var i=0; i<wb_selection.length; i++)
		{
	
			all_result +="<td>"+wb_selection[i]+"</td>" ;
				//alert("all_result1 " + all_result + " all_text[i] " + all_text[i] );
		}
			all_result +="<td><button class=\"remove\" onclick=\"deleteRowWb(this)\"><i class=\"fa fa-remove\"></i></button></td></tr>";
    }

	//alert (" in createTable all_result is " + all_result);
	//current_basket += all_result;
	
	//alert("all_result second " + all_result);
	setCookie("basket_details", all_result, 1);
//	alert("I am in createTable - all_result is " + all_result );
	return all_result;

	//alert("all_result2 " + all_result);
	//document.getElementById("vip_table").innerHTML = all_result;
}

//var b_details = {};



var total_pay = 0;

/**
*  Get the total of all subtotals of selected tickets and merchandise items and saved it in a cookie
*/
function get_totals(){
	var v_int;
	var p_int;
	var b_int;
	var pr_int;
	var s_int;
	var bn_int;
	var tt_int;
	var wb_int;
	var ts_int;
	
	var v_total = getCookie("vip_subt");
	var p_total = getCookie("pro_subt");
	var b_total = getCookie("basic_subt");
	var pr_total = getCookie("post_subt");
	var st_total = getCookie("stick_subt");
	var bn_total = getCookie("btn_subt");
	var tt_total = getCookie("tt_subt");
	var wb_total = getCookie("wb_subt");
	var ts_total = getCookie("tsh_subt");
	
	if (v_total !=""){
		var v_int = parseInt(v_total);
	}
	else{
		var v_int = 0;
	}
	if (p_total !=""){
		var p_int = parseInt(p_total);
	}
	else{
		var p_int = 0;
	}
	if (b_total !=""){
		var b_int = parseInt(b_total);
	}
	else{
		var b_int = 0;
	}
	
	
	if (pr_total !=""){
		var pr_int = parseInt(pr_total);
	}
	else{
		var pr_int = 0;
	}

	if (st_total !=""){
		var s_int = parseInt(st_total);
	}
	else{
		var s_int = 0;
	}
	
	if (bn_total !=""){
		var bn_int = parseInt(bn_total);
	}
	else{
		var bn_int = 0;
	}
	
	if (ts_total !=""){
		var ts_int = parseInt(ts_total);
	}
	else{
		var ts_int = 0;
	}
	if (wb_total !=""){
			var wb_int = parseInt(wb_total);
	}
	else{
		var wb_int = 0;
	}


	if (tt_total !=""){
		var tt_int = parseInt(tt_total);
	}
	else{
		var tt_int = 0;
	}
	
			
	//alert( "in get_totals p_total " + p_int +" v_int "+ v_int + "  b_int"  + b_int + " pr_int "  + pr_int  + " s_int " +  s_int +  " bn_int " +  bn_int+   " ts_int " +  ts_int+   " tt_int  "+  tt_int);
	total_pay = p_int +v_int +b_int+ pr_int+ s_int + bn_int+ ts_int+ tt_int + wb_int;
	//alert(" in get_totals total_pay is " + total_pay);
	
	return total_pay;
	
}

var all_sum = 0;
function checkTableCookie() {
	
	//setCookie("basket_details",all_result,-1)
	//setCookie("in_basket", all_basket,-1);
	//setCookie("in_basket", "",-1);
	
	//setCookie("basic_details", basic_json,-1);
	//setCookie("vip_details", vip_json, -1);
	//setCookie("pro_details", pro_json,-1);
	//setCookie("wb_details", wb_json,-1);
	//setCookie("tt_details", tt_json, -1);
	//setCookie("tsh_details", tsh_json, -1);
	//setCookie("btn_details", btn_json, -1);
	//setCookie("stick_details", stick_json, -1);
	//setCookie("post_details", post_json, -1)
	/*
	setCookie("in_basket", all_basket,-1);
	setCookie("in_basket", "",-1);
	setCookie("basic_details", "",-1);
	setCookie("vip_details", "", -1);
	setCookie("pro_details", "",-1);
	setCookie("wb_details", "",-1);
	setCookie("tt_details", "", -1);
	setCookie("tsh_details", "", -1);
	setCookie("btn_details", "", -1);
	setCookie("stick_details", "", -1);
	setCookie("post_details", "", -1);
	setCookie("post_total", "", -1);
	setCookie("stick_total", "", -1);
	setCookie("button_total", "", -1);
	setCookie("tshirt_total", "", -1);
	setCookie("top_total", "",-1);
	setCookie("wband_total","",-1);
	*/
/*
	var p_total = pro_subt;
	var v_total = vip_subt;
	var b_total = bas_subt;
	var pr_total = post_subt;
	var s_total = stick_subt;
	var bn_total = btn_subt;
	var ts_total = tsh_subt;
	var tt_total = tt_subt;
	var wb_total = wb_subt;
*/
	all_sum = get_totals();
	var sum_dollar = "$" + all_sum;
	//alert( " i am in checkTableCookie before iff statement all_sum " +all_sum) 
	var b_details = createTable();
  //var b_details = getCookie("basket_details");	
	//var all_sum = getCookie("all_subs");
	//alert( "in checkTableCookie  all_sum " + all_sum);

	
	// var all_basket = getCookie("in_basket");
//  alert(" i am in checkTableCookie - b_details is " + b_details);
			if(b_details != "" && b_details != null && b_details !='undefined' && b_details !=NaN){
				 //alert(" i am in checkTableCookie in if statement all_sum is " + all_sum);
				  
				  var new_result = "<table><thead><tr><th>Item</th><th>Qantity</th><th>Price</th><th>Subtotal</th><th></th></tr></thead><tbody><tr>";
					new_result+= b_details +"<th></th><th></th><th>Total</th><th>" +sum_dollar +"</th></tbody></table>";
				document.getElementById("basket_table").innerHTML = new_result;
				//alert("display paypal button");
				 $('#paypal-button-container').css('display', 'inline-block');
			}
			else{
			//	alert ("else for checkTableCookie ");
				document.getElementById("basket_table").innerHTML = "";
				hidePayPal();
				document.getElementById("empty_basket").textContent = "Your basket is empty";
				document.getElementById("sum").textContent = "Total $0";
}
}

// Hide Continue to PayPal button if the basket is empty
function hidePayPal() {
  var pp = document.getElementById("paypal-button-container");
    pp.style.display = "none";
  }


/*
* Delete a row with selected VIP passes, update the number of 
* VIP passes in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of VIP passes, and update the cookie storing details about the VIP passes
* 
*/
function deleteRowVIP(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
			//	alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("vip_total", "",1);
  setCookie("vip_details", "", 1);
  setCookie("vip_subt", "", 1);
 //alert("in deleteRowVIP(row)  set vip_subt cookie to 0");
   
   checkTableCookie();checkCookie();
	
}


/*
* Delete a row with selected Pro tickets, update the number of 
* Pro tickets in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of Pro tickets, and update the cookie storing details about the Pro tickets
* 
*/
function deleteRowPro(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
				//alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("pro_total", "",1);
  setCookie("pro_details", "", 1);
  setCookie("pro_subt", "", 1);
  
 checkTableCookie();checkCookie();
}

/*
* Delete a row with selected Basic tickets, update the number of 
* Basic tickets in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of Basic tickets, and update the cookie storing details about the Basic tickets
* 
*/
function deleteRowBasic(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
			//	alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("basic_total", "",1);
  setCookie("basic_details", "", 1);
  setCookie("basic_subt", "", 1);
   
 checkTableCookie();checkCookie();
}

/*
* Delete a row with selected posters, update the number of 
* posters in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of posters, and update the cookie storing details about posters
* 
*/
function deleteRowPost(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
				//alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("post_total", "",1);
  setCookie("post_details", "", 1);
  setCookie("post_subt", "", 1);
  
  checkTableCookie();checkCookie();
}


/*
* Delete a row with selected stickers, update the number of 
* stickers in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of stickers, and update the cookie storing details about stickers
* 
*/
function deleteRowStick(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
			//	alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("stick_total", "",1);
  setCookie("stick_details", "", 1);
  setCookie("stick_subt", "", 1);
   
  
 checkTableCookie(); checkCookie();
}

/*
* Delete a row with selected button badges, update the number of 
* button badges in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of button badges, and update the cookie storing details about button badges
* 
*/
function deleteRowBadg(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
			//	alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("button_total", "",1);
  setCookie("btn_details", "", 1);
  setCookie("btn_subt", "", 1);
  
  checkTableCookie();checkCookie();
}

/*
* Delete a row with selected T-shirts, update the number of 
* T-shirts in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of T-shirts, and update the cookie storing details about T-shirts
* 
*/
function deleteRowTs(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
			//	alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("tshirt_total", "",1);
  setCookie("tsh_details", "", 1);
  setCookie("tsh_subt", "", 1);
  
  checkTableCookie();checkCookie();
  
}

/*
* Delete a row with selected tank tops, update the number of 
* tank tops in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of tank tops, and update the cookie storing details about tank tops
* 
*/
function deleteRowTt(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
			//	alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("top_total", "",1);
  setCookie("tt_details", "", 1);
  setCookie("tt_subt", "", 1);
    
 checkTableCookie(); checkCookie(); 

}

/*
* Delete a row with selected wristbands, update the number of 
* wristbands in the basket badge in the nav bar, update the cookie storing the number of 
* selected number of wristbands, and update the cookie storing details about wristbands
* 
*/
function deleteRowWb(row) {
  var a_row = row.parentNode.parentNode.rowIndex;
			//	alert("in deleteRow a_row is " + a_row);
	var del_no = document.getElementById("basket_table").rows[a_row].cells[1].innerHTML;
	var del_int = parseInt(del_no);
	//alert("in deleteRow  del_no is " + del_no +" del_int "+ del_int);
  //var del_text = document.getElementById("basket_table").rows[a_row].textContent;
  //var del_name = del_text.split(',')[0];    
	//			alert("in deleteRow del_text " + del_text+" del_name "+ del_name);

  document.getElementById("basket_table").deleteRow(a_row);
 // var basket_value = document.getElementById("basket_id").innerHTML;
  //all_basket = basket_value - del_no;
  //alert("basket_value is " + basket_value +" all_basket "+ all_basket);
  //document.getElementById("basket_id").innerHTML = all_basket;
 // setCookie("in_basket", all_basket,1);
  setCookie("wband_total", "",1);
  setCookie("wb_details", "", 1);
  setCookie("wb_subt", "", 1);
  
  checkTableCookie();checkCookie();
  
}

// Reset cookies holding records of selected tickets and items to 0
function resetCookies(){
	var basket_details = getCookie("basket_details");
	var in_basket = getCookie("in_basket");
	
	var basic_details = getCookie("basic_details");
	var vip_details = getCookie("vip_details");
	var pro_details = getCookie("pro_details");
	var wb_details = getCookie("wb_details");
	var tt_details = getCookie("tt_details");
	var tsh_details = getCookie("tsh_details");
	var btn_details = getCookie("btn_details");
	var stick_details= getCookie("stick_details");
	var post_details = getCookie("post_details")
	
	var pro_total = getCookie("pro_total");
	var basic_total= getCookie("basic_total");
	var vip_total = getCookie("vip_total");

	var post_total = getCookie("post_total");
	var stick_total = getCookie("stick_total");
	var button_total = getCookie("button_total");
	var tshirt_total = getCookie("tshirt_total");
	var top_total = getCookie("top_total");
	var wband_total = getCookie("wband_total");
	
	var tt_subt =getCookie("tt_subt");
	var vip_subt =getCookie("vip_subt");
	var pro_subt= getCookie("pro_subt");
	var basic_subt =getCookie("basic_subt");
	var post_subt =getCookie("post_subt");
	var stick_subt= getCookie("stick_subt");
	var btn_subt= getCookie("btn_subt");
	var tsh_subt= getCookie("tsh_subt");
	var wb_subt =getCookie("wb_subt");
	
	
	if(basket_details){
		setCookie("vip_subt", "", -1);
	}
	if(basket_details){
			setCookie("tt_subt", "", -1);
	
	}
	if(basket_details){
		setCookie("pro_subt", "", -1);
	}
	if(basket_details){
		setCookie("basic_subt", "", -1);
	
	}
	if(basket_details){
		setCookie("post_subt", "", -1);
	}
	if(basket_details){
		setCookie("stick_subt", "", -1);
	}
	if(basket_details){
	setCookie("btn_subt", "", -1);
	}
	if(basket_details){
		setCookie("tsh_subt", "", -1);
	}
	if(basket_details){
	setCookie("wb_subt", "", -1);	
	}

	
	
	
	
	
	
	
	
	if(basket_details){
		setCookie("basket_details", "", -1);
	}
	if(in_basket){
		setCookie("in_basket", "",-1);
	}
	if(basic_details){
		setCookie("basic_details", "",-1);
	}
	if(vip_details){
		setCookie("vip_details", "", -1);
	}
	if(pro_details){
		setCookie("pro_details", "",-1);
	}
	if(wb_details){
		setCookie("wb_details", "",-1);
	}
	if(tt_details){
		setCookie("tt_details", "", -1);
	}
	if(tsh_details){
		setCookie("tsh_details", "", -1);
	}
	if(btn_details){
		setCookie("btn_details", "", -1);
	}
	if(stick_details){
		setCookie("stick_details", "", -1);
	}
	if(post_details){
		setCookie("post_details", "", -1);
	}
	if(pro_total){
		setCookie("pro_total", "",-1);
	}
	if(basic_total){
		setCookie("basic_total", "",-1);
	}
	if(vip_total){
		setCookie("vip_total", "",-1);
	}
	if(post_total){
		setCookie("post_total", "", -1);
	}
	if(stick_total){
		setCookie("stick_total", "", -1);
	}
	if(button_total){
		setCookie("button_total", "", -1);
	}
	if(tshirt_total){
		setCookie("tshirt_total", "", -1);
	}
	if(top_total){
		setCookie("top_total", "",-1);
	}
	if(wband_total){	
		setCookie("wband_total","",-1);
	}
	//alert("in reset cookies basket_details " +basket_details +" in_basket "+in_basket);	
	document.getElementById("basket_id").innerHTML = "";
	document.getElementById("basket_table").innerHTML = "";
	hidePayPal();
}	



// Registration

function match_email(){
	
	var reg_email = document.getElementById("reg_email").value;
	var conf_email = document.getElementById("conf_email").value;
	if(reg_email != conf_email) {
            
			//document.getElementById("conf_email").innerHTML = conf_email.setCustomValidity("Emails don't match");
			document.getElementById("conf_email").setCustomValidity("Emails don't match");
			//alert("not matching");
			//document.getElementById("conf_email").innerHTML = conf_email;
     }
	 else{
		 
		 //alert( "else - reg_email "+reg_email);
		 return reg_email; 
	 }
	
}

function get_reg_data(){
	
// Read the input data
	var email_matched = match_email();
	var regfname = document.getElementById("regfname").value;
	//alert(regfname);
	var reglname = document.getElementById("reglname").value;
	
	var regpass = document.getElementById("regpass").value;
	var tel = document.getElementById("tel").value;
	var dob = document.getElementById("dob").value;
	var month_id = document.getElementById("month_id").value;
	var day = document.getElementById("day").value;
	var street = document.getElementById("street").value;
	var town = document.getElementById("town").value;
	var zip = document.getElementById("zipc").value;
	var tandc = document.querySelector('#tandc').checked;
	var subsc = document.querySelector('#subsc').checked;
/*
	var regfname_trim;
	var reglname_trim;
	var reg_email_trim;
	var regpass_trim;
	var tel_trim;
	var dob_trim;
	var street_trim;
	var town_trim;
	var zip_trim;
*/
//alert("tandc " + tandc  + " subsc " +subsc);
// Trim trailing and leading spaces


	 var regfname_trim = regfname.replace(/^\s+|\s+$/gm,'');
	 var reglname_trim =  reglname.replace(/^\s+|\s+$/gm,'');
	 var reg_email_trim =  email_matched.replace(/^\s+|\s+$/gm,'');
	 var regpass_trim =  regpass.replace(/^\s+|\s+$/gm,'');
	 var tel_trim =  tel.replace(/^\s+|\s+$/gm,'');
	 var dob_trim =  dob.replace(/^\s+|\s+$/gm,'');
	 var street_trim =  street.replace(/^\s+|\s+$/gm,'');
	 var town_trim =  town.replace(/^\s+|\s+$/gm,'');
	 var zip_trim =  zip.replace(/^\s+|\s+$/gm,'');
								
		
//alert("regfname_trim " + regfname_trim);
}

$(document).ready(function() {
	 $("#reg_form").submit(function(e){
		 // Set the session cookie to hold the email address and password entered on the registration page
		 var user_reg_email = match_email();
		 var user_reg_pass = document.getElementById("regpass").value;
		 //alert("in document ready user_reg_email " +user_reg_email +" user_reg_pass " + user_reg_pass)
		 setCookie("user_email", user_reg_email, 3);
		 setCookie("user_pass", user_reg_pass, 3);
		 // Display a confirmation message after the registration form is submitted and hide the form
		 e.preventDefault();
     $('#confirm_reg').css('display', 'inline-block');
	 var register_form = document.getElementById("reg_form");
		register_form.style.display = "none";
		

});
})

// Validate login details
function validate_login(){
	// Get the email address and the password from the login modal
	var login_email = document.getElementById("usern").value;
	var login_pass = document.getElementById("pass").value;
	// Get the email address and the password entered on the registraton page from cookies 
	var u_reg_email = getCookie("user_email");
	var u_reg_pass = getCookie("user_pass");
	//alert("user_reg_email" + u_reg_email + " user_reg_pass " + u_reg_pass);
	if (u_reg_email == login_email && u_reg_pass == login_pass) {
	//alert(" u and p matching");
	
	//alert("first_list" + first_list);
	document.getElementById('login_modal').style.display='none';
	//alert("log out" + log_out);
		//document.getElementById("login").innerHTML = "Log out";
		
	}
	else{
		//alert(" u and p  NOT matching");
		document.getElementById("submit_login").setCustomValidity("Email address or password are incorrect");
		//document.getElementById("pass").setCustomValidity("Email address or password are incorrect");
	}
}

function confirm_subsc(){
	$('#confirm_subs').css('display', 'inline-block');
	 var news_form = document.getElementById("newsletter_form");
		news_form.style.display = "none";
}

/*

$(document).ready(function() {
	 $("#newsletter_form").submit(function(e){
	$('#confirm_subs').css('display', 'inline-block');
	 var news_form = document.getElementById("newsletter_form");
		news_form.style.display = "none";

*/
/**
function send_user-data{
const user = {
  category: 'user',
  first name: ",
  last name: 'Learn Cloud Datastore',
  subscribed: false,
};


}
	
*/	
