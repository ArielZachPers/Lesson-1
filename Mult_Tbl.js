var mult_tbl = '<table>';
for (i=1; i<=10; i++) {
	mult_tbl = mult_tbl + '<tr>';
	for (j=1; j<=10; j++) {
		mult_tbl =  mult_tbl + '<td>' + (i*j) + '</td>';
	}
	mult_tbl += '</tr>';
}
mult_tbl += '</table>';
document.write(mult_tbl);