function Person (fName, lName, Age, Address, City) {
	this.fName = fName;
	this.lName = lName;
	this.Age = Age;
	this.Address = Address;
	this.City = City;
	}
	
	var Person_0 = new Person("Bob", "Smith", 20, "2 Main St", "Palo Alto");
	var Person_1 = new Person("Joe", "Doe", 25, "2 Second St", "Palo Alto");
	var Person_2 = new Person("Joe", "Bazooka", 99, "2 Third St", "Palo Alto");
	var Person_Array = [Person_0, Person_1, Person_2];
	document.write("reached end assignments <br/>");

/* function Detective (fName, lName, Age, Address, City) {
	this.fName = fName;
	this.lName = lName;
	this.Age = Age;
	this.Address = Address;
	this.City = City;
	this.find_person_by_name = function(first_name) { */
	function find_person_by_name (first_name) {
	found = false;
	for (i in Person_Array) {
		if (Person_Array[i].fName == first_name) {
		/*this.Detective = Person_Array [i];*/
			found = true;
			document.write("Name " + first_name + " is in array: at index " + i);
			break;
			}
		}
	if (!found) {
		document.write("Name not in array: " + first_name);
		}
	}

document.write("After Function <br/>");
find_person_by_name("Joe");