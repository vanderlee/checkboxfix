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

	var copy_to_hidden		= [
			'name',
			'disabled',
			'form',
			'required'
		],
		copy_to_checkbox	= [
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
ⓘ contextmenu = ID reference NEW
	The value of the id attribute on the menu with which to associate the element as a context menu.
ⓘ draggable = "true" or "false" NEW
	Specifies whether the element is draggable.
ⓘ dropzone = dropzone value NEW
	Specifies what types of content can be dropped on the element, and instructs the UA about which actions to take with content when it is dropped on the element.
	An unordered set of unique space-separated tokens, each of which is a case-insensitive match for one of the following:
ⓘ lang = language tag
	Specifies the primary language for the contents of the element and for any of the element’s attributes that contain text.
	A valid language tag as defined in [BCP 47].
ⓘ tabindex = integer
 */

	$.fn.checkboxfix = function(_off) {
		return this.each( function() {
			var element		= $(this),
				off			= _off? _off : element.attr('off')? element.attr('off') : '',
				checked		= element.is(':checked'),
				value		= element.val(),
				hidden		= $('<input type="hidden" value="'+(checked? value : off)+'"/>'),
				checkbox	= $('<input type="checkbox" value="'+(checked? value : off)+'"/>')
								.change(function() {
									var val = $(this).is(':checked')? value : off;
									hidden.val(val);
									checkbox.val(val);
								});

			$.each(element.get(0).attributes, function(i, a){
				if ($.inArray(a.name, copy_to_hidden) >= 0) {
					hidden.attr(a.name, a.value);
				}
				if ($.inArray(a.name, copy_to_checkbox) >= 0) {
					checkbox.attr(a.name, a.value);
				}
			});

			element.replaceWith(hidden);
			checkbox.insertAfter(hidden);

		});
	};
})( jQuery );

jQuery(function() {
	$('input[type=checkboxfix],input[off]').checkboxfix();
});