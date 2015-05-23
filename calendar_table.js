var cal_tbl = '<table>';
cal_tbl += '<tr>';
var days_array = ['Sun','Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// fill first row
for (i=0;i<days_array.length;i++) {
	cal_tbl += '<td>';
	cal_tbl += days_array[i];
	cal_tbl += '</td>';
}
cal_tbl += '</tr>';

var FirstDay = prompt('What day falls on the first of the month?');
var NumDays = prompt('How many days in the month?');
//document.write('Accepted day name: ' + FirstDay + '<br/>');

switch (FirstDay) {
	case 'Sun': 
		ix = 1; 
		break;
	case 'Mon': 
		ix = 2; 
		break;
	case 'Tue': 
		ix = 3; 
		break;
	case 'Wed': 
		ix = 4; 
		break;
	case 'Thu': 
		ix = 5; 
		break;
/*	case 'Fri': 
		ix = 6: 
		break; */
	case 'Sat': 
		ix = 7; 
		break; 
	default: 
		alert('Please specify a valid day name in three first letters'); 
		break;
	} 

//document.write('before filling first row <br/>');
// fill first row
cal_tbl += '<tr>';	
var curr_day = 0;

for (i=1; i<=days_array.length; i++) {
	cal_tbl += '<td>';
	if (i < ix) {cal_tbl += '</td>';}
	else {if (i == ix) {curr_day = 1;}
		else {curr_day++;}
	cal_tbl += curr_day;
	cal_tbl += '</td>';}
	}
//document.write('after filling first row <br/>');	 
cal_tbl += '</tr>';

// fill rest of rows
for (rows=2; rows <= 6; rows++) {
//	document.write('in outer loop, rows =' + rows + '<br/>');
	cal_tbl += '<tr>';
	for (days=1; days<=7; days++) {
//		document.write('in inner loop, days =' + days + '<br/>');
		cal_tbl += '<td>';
		curr_day++; if (curr_day > NumDays) {break;}
		cal_tbl += curr_day;
		cal_tbl += '</td>';
		}
		cal_tbl += '</tr>';
	}

cal_tbl += '</table>';
document.write(cal_tbl);

