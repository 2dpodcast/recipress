jQuery(function() {
	
	var hasRecipe = jQuery('#hasRecipe');
	jQuery(hasRecipe).change(function(){
			jQuery('#recipress_table').slideToggle('slow');
	});
	if(jQuery(hasRecipe).is(':checked')) jQuery('#recipress_table').show();
	
	jQuery('.upload_image_button').click(function() {
		formfield = jQuery(this).siblings(".upload_image");
		preview = jQuery(this).siblings(".preview_image");
		tb_show('', 'media-upload.php?type=image&TB_iframe=true');
		window.send_to_editor = function(html) {
			imgurl = jQuery('img',html).attr('src');
			classes = jQuery('img', html).attr('class');
			id = classes.replace(/(.*?)wp-image-/, '');
			formfield.val(id);
			preview.attr('src', imgurl);
			tb_remove();
		}
		return false;
	});
	
	jQuery('.clear_image_button').click(function() {
		jQuery('.upload_image').val('');
		jQuery('.preview_image').attr('src', pluginDir + 'img/image.png');
	});
	
	jQuery(".ingredient_add").click(function() {
		jQuery("#ingredients_table tbody>tr:last")
			.clone(true)
			.insertAfter('#ingredients_table tbody>tr:last')
			.addClass('more')
			.find('input[type=text], input[type=number], select').val('')
			.attr('name', function(index, name) {
				return name.replace(/(\d+)/, function(fullMatch, n) {
					return Number(n) + 1;
				});
			})
			.parent().find('input, select')
			.attr('id', function(index, id) {
				return id.replace(/(\d+)/, function(fullMatch, n) {
					return Number(n) + 1;
				});
			})
			.parent().find('input.ingredient')
			.attr('onfocus', function(index, onfocus) {
				return onfocus.replace(/(\d+)/, function(fullMatch, n) {
					return Number(n) + 1;
				});
			})
		return false;
	});
	
	jQuery(".instruction_add").click(function() {
		jQuery("#instructions_table tbody>tr:last")
			.clone(true)
			.insertAfter('#instructions_table tbody>tr:last')
			.addClass('more')
			.find('input[type=hidden], textarea').val('')
			.attr('name', function(index, name) {
				return name.replace(/(\d+)/, function(fullMatch, n) {
					return Number(n) + 1;
				});
			})
			//.parent().find('.preview_image').attr('src', pluginDir + 'img/image.png')
			.parent().parent().find('.step')
			.html(function(index, id) {
				return id.replace(/(\d+)/, function(fullMatch, n) {
					return Number(n) + 1;
				});
			})
		return false;
	});
	
	jQuery('.ingredient_remove').click(function(){
		jQuery(this).parent().parent().remove();
		return false;
	});
	
	jQuery('.instruction_remove').click(function(){
		jQuery(this).parent().parent().remove();
		return false;
	});
	
	jQuery('#ingredients_table tbody').sortable({
		opacity: 0.6,
		revert: true,
		cursor: 'move',
		handle: '.sort'
	});
		
	jQuery('#instructions_table tbody').sortable({
		opacity: 0.6,
		revert: true,
		cursor: 'move',
		handle: '.sort'
	});

});