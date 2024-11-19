jQuery(document).ready(function () {	
	jQuery(".nav-search form#search-block-form").addClass("hide");
	jQuery(".bg-image-section").each(function(){
		var image_url_background = jQuery(this).attr('data-gutter-class');
		jQuery(this).css('background-image','url("' + image_url_background + '")');
	});
	
	jQuery(".tab-area .nav-link").click(function(){
		jQuery(".tab-area .tab-pane").hide();
		var data_bs_target = jQuery(this).attr('data-bs-target');
		jQuery(".tab-area .tab-pane").hide();
		//jQuery("#"+data_bs_target).show();	
		jQuery(".tab-area " + data_bs_target).show();
		return false;
	});
	
	jQuery(".tab-area-two .nav-link").click(function(){
		jQuery(".tab-area-two .tab-pane").hide();
		var data_bs_target = jQuery(this).attr('data-bs-target');
		jQuery(".tab-area-two .tab-pane").hide();
		//jQuery("#"+data_bs_target).show();	
		jQuery(".tab-area-two " + data_bs_target).show();
		return false;
	});
	
	
});