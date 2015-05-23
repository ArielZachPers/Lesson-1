	/*
	document.write('<p>Hello world</p>');
	document.write('<p>From main.js</p>');
	document.write('Yor are accessing this page from ' + location.hostname)
	var i=10, j=99;
	document.write('<p>Var i=' + i + ', j=' + j + '</p>');
	var t='This work\'s well';
	document.write('<p>Var t=' + t + '</p>');
	// alert('Test Alert Box');
	if(confirm('Can I say yes?')  == true)
		{document.write('<p>Yes</p>'); }
	else
		{document.write('<p>No</p>'); };
	
	var fname = prompt('What is your name?'); 
	if( fname != '')
		{ document.write('<p>Hello ' + fname + '</p>'); }
	else
		{ document.write('<p>You didn\'t enter your name!</p>'); }
	*/
	var crust = prompt('What kind of crust?');
	document.write('<p>Selected crust is ' + crust + '</p>');
	
	if ((crust == 'thin')||(crust == 'regular'))
		{ 
			document.write('<p>Confirming your selection of crust ' + crust + '</p>'); 
			var cheese = prompt('What kind of cheese?');
			switch (cheese) {
				case 'mozarella':
				case 'feta':
					document.write('<p>Confirming your selection of ' + cheese + ' cheese.</p>');
					break;
				default:
					alert('We don\'t have this kind of cheese:' + cheese);
					break; 
				}
			}
		else {
			alert('Sorry don\'t have this type of crust: ' + crust);
		}