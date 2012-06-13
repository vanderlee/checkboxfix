CheckboxFix
===========
Always return checkbox values on submitted forms.

Usage
-----
Explicit, submit empty string when unchecked

0.	Create a normal checkbox.
0.	Call $(<selector>).checkboxfix() on the checkbox.

Explicit, submit specified string when unchecked

0.	Create a normal checkbox.
0.	Call $(<selector>).checkboxfix('string') on the checkbox.

Implicit, by "type" attribute, returning empty string when unchecked.

0.	Create a normal checkbox but use type="checkboxfix" instead.

	This syntax uses a non-standard type and may fail on browsers without javascript support.

Implicit, by "off" attribute, returning specified string when unchecked.

0.	Create a normal checkbox but add an off="string" attribute.

	Not all browsers support expando attributes, though most will.
