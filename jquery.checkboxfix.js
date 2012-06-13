/*jslint devel: true, bitwise: true, regexp: true, browser: true, confusion: true, unparam: true, eqeq: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
/*globals jQuery */

/*
 * CheckboxFix
 *
 * Copyright (c) 2012 Martijn W. van der Lee
 * Licensed under the MIT.
 */

(function ($) {
	"use strict";

	var attributes	= [
			'class',
			'id',
			'checked',
			'disabled',
			'autofocus',
			'accesskey',
			'title',
			'style',
			'hidden',
			'contenteditable'
		];

/*
 contenteditable = "true" or "false" or "" (empty string) or empty NEW
	Specifies whether the contents of the element are editable.
 contextmenu = ID reference NEW
	The value of the id attribute on the menu with which to associate the element as a context menu.
 draggable = "true" or "false" NEW
	Specifies whether the element is draggable.
 dropzone = dropzone value NEW
	Specifies what types of content can be dropped on the element, and instructs the UA about which actions to take with content when it is dropped on the element.
	An unordered set of unique space-separated tokens, each of which is a case-insensitive match for one of the following:
 lang = language tag
	Specifies the primary language for the contents of the element and for any of the element’s attributes that contain text.
	A valid language tag as defined in [BCP 47].
 tabindex = integer
 */

	$.fn.checkboxfix = function(_off) {
		return this.each( function() {
			var element		= $(this),
				off			= _off? _off : element.attr('off')? element.attr('off') : '',
				value		= element.val(),
				checked		= element.is(':checked'),
				checkbox	= $('<input type="checkbox" value="'+(checked? value : off)+'"/>');

			// Move attributen
			$.each(element.get(0).attributes, function(i, a){
				if (a && $.inArray(a.name, attributes) >= 0) {
					checkbox.attr(a.name, a.value);
					element.removeAttr(a.name);
				}
			});

			// Change original checkbox
			if (!checked) {
				element.val(off);
			}
			element.hide().attr('checked', true);

			// Add new checkbox
			element.after(checkbox);

			// Handle checkbox events
			checkbox.change(function(event) {
				var val = checkbox.is(':checked')? value : off;
				element.val(val);
				checkbox.val(val);

				element.trigger('change');
			});

			// Handle reset
			element.closest('form').on('reset', function() {
				// Undo damage done by reset
				element.attr('checked', true);
				// Reset actual initial values
				var val = checked? value : off;
				element.val(val);
				checkbox.val(val);
			});
		});
	};
})( jQuery );

jQuery(function() {
	$(':checkbox[off]').checkboxfix();
});