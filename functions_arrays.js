function monthly_wage(hourly_rate) {
	var num_days_in_month = 22;
	var num_hours_in_day = 8;
	return num_days_in_month * num_hours_in_day * hourly_rate;
}
//alert(monthly_wage(24));
function greater_than_100 (value) {
	return value > 100;
	}
//	alert(greater_than_100(prompt("Enter a number")));
var array_of_any = ['text', 10, 1+2, "last"];
document.write(array_of_any.join(",") + '</br>');
for (i in array_of_any) {
	document.write(array_of_any[i] + '</br>');
	}
	
// var num_array = [12,67,22,12,10,6,8];

var pets = ['dog', 'cat', 'dog']; //'hamster', 'bird', 'dog', 'goldfish'];

do {
	curr_item = prompt("Enter animal type");
	ix_curr_item = pets.indexOf(curr_item);
	document.write("Index of select animal type is: " + ix_curr_item + "</br>");
	if (ix_curr_item >= 0) {
		pets.splice(ix_curr_item,1);
		document.write("Deleted " + curr_item + " using splice. </br>");
		}
		else {
			document.write(curr_item + " not found in array. </br>");
			break;
			}
	} while (pets.length > 0);
		

