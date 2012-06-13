<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <title>jQuery Checkboxfix</title>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js "></script>

		<script src="jquery.checkboxfix.js "></script>

		<script>

			$( function() {
				$('.fixed')
				.checkboxfix()
				.change(function() {
					console.log('Change');
				});

				$('.value')
				.checkboxfix('Off');
			});
		</script>

		<style>
			.classy {
				outline: solid 1px red;
			}

			#identity {
				outline: solid 1px green;
			}
		</style>
    </head>
    <body>
		<h1>CheckboxFix</h1>

		<h2>Submittable form</h2>
		<form method="post">
			<table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse;">
				<thead>
					<tr>
						<th>Label</th>
						<th>CB</th>
						<th>Description</th>
						<th>Prediction</th>
						<th>Form result</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Plain</td>
						<td><input type="checkbox" name="plain" class="plain" value="On"/></td>
						<td>not submitted when unchecked</td>
						<td><i>nothing</i></td>
						<td><?php echoif($_REQUEST['plain']); ?></td>
					</tr>
					<tr>
						<td>Fixed</td>
						<td><input type="checkbox" name="fixed" class="fixed" value="On"/></td>
						<td>submits empty string when unchecked</td>
						<td><i>empty string</i></td>
						<td><?php echoif($_REQUEST['fixed']); ?></td>
					</tr>
					<tr>
						<td>Fixed checked</td>
						<td><input type="checkbox" name="fixed-checked" class="fixed" value="On" checked="checked"/></td>
						<td>submits empty string when unchecked</td>
						<td>On</td>
						<td><?php echoif($_REQUEST['fixed-checked']); ?></td>
					</tr>
					<tr>
						<td>Value</td>
						<td><input type="checkbox" name="value" class="value" value="On"/></td>
						<td>submits custom string when unchecked, specified in jQUery</td>
						<td>Off</td>
						<td><?php echoif($_REQUEST['value']); ?></td>
					</tr>
					<tr>
						<td>off expando empty</td>
						<td><input type="checkbox" name="off-empty" value="On" off=""/></td>
						<td>Has the offernative value specified in off attribute.</td>
						<td><i>empty string</i></td>
						<td><?php echoif($_REQUEST['off-empty']); ?></td>
					</tr>
					<tr>
						<td>off expando specified</td>
						<td><input type="checkbox" name="off-filled" value="On" off="Off"/></td>
						<td>Has the offernative value specified in off attribute.</td>
						<td>Off</td>
						<td><?php echoif($_REQUEST['off-filled']); ?></td>
					</tr>
				</tbody>
			</table>
			<button type="submit">Submit</button>
			<button type="reset">Reset</button>
		</form>

		<h2>Attribute copying</h2>
		<input type="checkbox" off="" name="name"/>name<br/>
		<input type="checkbox" off="" class="classy"/>class (red outline)<br/>
		<input type="checkbox" off="" id="identity"/>id (green outline)<br/>
		<input type="checkbox" off="" disabled="disabled"/>disabled<br/>
		<input type="checkbox" off="" required="required"/>required<br/>
		<input type="checkbox" off="" accesskey="c"/>accesskey (off+c)<br/>
		<input type="checkbox" off="" title="Title here!"/>title (hover)<br/>
		<input type="checkbox" off="" style="outline: solid 1px blue;"/>style (blue outline)<br/>
		<input type="checkbox" off="" hidden="hidden"/>hidden (not visible)<br/>
		<input type="checkbox" off="" contenteditable="false"/>contenteditable (not editable)<br/>

		<?php
			function echoif(&$value) {
				if (isset($value)) {
					if ($value === '') {
						echo '<i>empty string</i>';
					} else {
						echo $value;
					}
				} else {
					echo '<i>nothing</i>';
				}
			}
		?>
    </body>
</html>
