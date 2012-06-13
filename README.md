CheckboxFix
===========
Always return checkbox values on submitted forms.

Features
--------
0.	Easy to use; just add an expando attribute off="".
0.	Maintains attributes and look of checkbox.
0.	Handles change events.
0.	Handles form resets.

Usage
-----
Implicit, returning specified string when unchecked.

0.	Create a normal checkbox but add an off="string" attribute.

	Some old browsers may reject the extra attributes.

Explicit, submit empty string when unchecked

0.	Create a normal checkbox.
0.	Call $(<selector>).checkboxfix() on the checkbox.

Explicit, submit specified string when unchecked

0.	Create a normal checkbox.
0.	Call $(<selector>).checkboxfix('string') on the checkbox.
