
jQuery('#testimonial_btn').click(function(){

	var post_data = {
					action: 'kg_white_paper_form',
					kg_fullname : jQuery('#full_name'),
					kg_email : jQuery('#word_email'),
					kg_job_title : jQuery('#job_title'),
					kg_telephone : jQuery('#work_phone_number')

					}
    jQuery.ajax
    ({ 
        type: 'POST',
		url: flatsomeVars.ajaxurl,
		data: post_data,
        success: function(result)
        {
            alert('kkkk');
			alert(result);
        }
    });
});
