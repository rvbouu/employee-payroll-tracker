// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Empty array to store employee objects
  let employeesArray = [];
  
  // Sets addMore variable default to true
  let addMore = true;

  while(addMore){
    // Empty employee object
    let employee = {};

    // Collects data for employee object
    employee.firstName = prompt(`Enter first name:`);
    employee.lastName = prompt(`Enter last name:`);
    employee.salary = parseInt(prompt(`Enter salary:`), 10);

    // Adds employee object to employeesArray
    employeesArray.push(employee);

    // Asks user if they want to continue
    // Reassigns addMore variable depending on user answer
    addMore = confirm(`Do you want to add another employee?`)
  }

  // Displays employee table on screen
  displayEmployees(employeesArray);

  // Returns an array of objects in the console
  return(employeesArray);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Sets totalSalary variable to 0
  let totalSalary = 0;

  // Assigns length variable the length of the array
  let length = employeesArray.length;

  // Finds each instance of salary in each object in the array and adds it to totalSalary
  employeesArray.forEach(({salary})=> totalSalary += salary);

  // Finds the average salary and rounds it
  let average = Math.floor(totalSalary/length);

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${average}.00`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // assigns employeesArray to global array element
//  employeesArray = employeesInfo;

 // randomizer that will select an employee from the array
 const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];

 // display's random employee's first and last name in the console
 console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
