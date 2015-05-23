
// Function to validate email is not generic Yahoo or Gmail
function reject_bad_email(email_addr) {
	
	var bad_email_array_exp = [/yahoo.com/gi, /google.com/gi];
	
	// for (i in bad_email_array_exp) {
	var address_valid = true;
	for (i=0; i < bad_email_array_exp.length; i++) {
		ix_regexp = email_addr.search(bad_email_array_exp[i]);
		// document.write("ix_regexp for i= " + i + " is " + ix_regexp + "</br>");
	
		if (ix_regexp >=0 ) {
			alert("Email address " + email_addr + " contains" + bad_email_array_exp[i]);
			address_valid = false;
			break;
			} // end if
		} // end for loop
		if (address_valid) {alert("Email address is OK");}
	} // end function
	
email_inp = prompt("Enter email address");
reject_bad_email(email_inp);