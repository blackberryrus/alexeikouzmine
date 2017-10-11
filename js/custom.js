$(document).on('ready', function() {

	$('.l-side ul li').on('click',  function() {
		$(this).toggleClass('show').siblings('.submenu').slideToggle(0);
	});


 	$('.list-group').on('click', '.list-group-item.active', function() {
		$(this).toggleClass('red').siblings('.list-group-item.item_body').slideToggle();
		
	});
	
	 	$('.c-hamburger').on('click', function() {
		$('.l-side').toggleClass('s_show');
		
	});
 
  });  
  
	