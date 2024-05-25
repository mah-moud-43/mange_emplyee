class Employee {
    constructor(name, joiningDate) {
        this.id = Employee.nextId++;
        this.name = name;
        this.joiningDate = joiningDate;
        this.salary = 1700;
    }
}

Employee.nextId = 1000;

class EmployeeList {
    constructor() {
        this.employees = [];
    }

    addEmployee(newEmployee, price) {
        newEmployee.salary += price;
        this.employees.push(newEmployee);
    }

    displayAllEmployees() {
        const tableBody = document.getElementById("employeeList");
        tableBody.innerHTML = "";

        this.employees.forEach(emp => {
            const row = tableBody.insertRow();
            row.innerHTML = `<td>${emp.id}</td><td>${emp.name}</td><td>${emp.salary}</td><td>${emp.joiningDate}</td>`;
        });
    }

    searchEmployee(empId) {
        return this.employees.find(emp => emp.id === empId);
    }

    bubbleSortEmployeesByName() {
        this.employees.sort((a, b) => a.name.localeCompare(b.name));
    }

    displaySortedEmployees() {
        this.bubbleSortEmployeesByName();
        this.displayAllEmployees();
    }
}

const employees = new EmployeeList();

function addEmployee() {
    const empName = document.getElementById("empName").value;
    const joiningDate = document.getElementById("joiningDate").value;
    const additionalPrice = parseFloat(document.getElementById("additionalPrice").value);

    const newEmployee = new Employee(empName, joiningDate);
    employees.addEmployee(newEmployee, additionalPrice);

    hideAddEmployeeForm();
    employees.displayAllEmployees();
}

function showAddEmployeeForm() {
    document.querySelector('.main-screen').style.display = 'none';
    document.querySelector('.add-employee-form').style.display = 'block';
}

function hideAddEmployeeForm() {
    document.querySelector('.main-screen').style.display = 'block';
    document.querySelector('.add-employee-form').style.display = 'none';
}

function showAllEmployees() {
    document.querySelector('.main-screen').style.display = 'block';
    document.querySelector('.employees-list').style.display = 'block';
    document.querySelector('.add-employee-form').style.display = 'none';
    document.querySelector('.search-employee-form').style.display = 'none';
    employees.displayAllEmployees();
}

function searchEmployee() {
    const searchId = parseInt(document.getElementById("searchId").value);
    const foundEmployee = employees.searchEmployee(searchId);

    const searchOutput = document.getElementById("searchOutput");

    if (foundEmployee) {
        searchOutput.innerHTML = `Employee found - ID: ${foundEmployee.id}, Name: ${foundEmployee.name}, Salary: $${foundEmployee.salary}, Joining Date: ${foundEmployee.joiningDate}`;
    } else {
        searchOutput.innerHTML = `Employee with ID ${searchId} not found.`;
    }
}

function showEmployeeSearchForm() {
    document.querySelector('.main-screen').style.display = 'none';
    document.querySelector('.add-employee-form').style.display = 'none';
    document.querySelector('.employees-list').style.display = 'none';
    document.querySelector('.search-employee-form').style.display = 'block';
}

function hideEmployeeSearchForm() {
    document.querySelector('.main-screen').style.display = 'block';
    document.querySelector('.add-employee-form').style.display = 'none';
    document.querySelector('.employees-list').style.display = 'none';
    document.querySelector('.search-employee-form').style.display = 'none';
}

function displaySortedEmployees() {
    employees.bubbleSortEmployeesByName();
    employees.displaySortedEmployees();
}

// Adding sample data for 10 employees
employees.addEmployee(new Employee("John Doe", "2023-01-01"), 0);
employees.addEmployee(new Employee("Jane Smith", "2015-02-15"), 2000);
employees.addEmployee(new Employee("Mike Johnson", "2013-03-20"), 2100);
employees.addEmployee(new Employee("Emily Davis", "2023-04-05"), 0);
employees.addEmployee(new Employee("Chris Brown", "2017-05-10"), 1900);
employees.addEmployee(new Employee("Emma Wilson", "2023-07-01"), 0);
employees.addEmployee(new Employee("Alex Green", "2011-02-15"), 2200);
employees.addEmployee(new Employee("Sophia Martinez", "2023-05-20"), 0);
employees.addEmployee(new Employee("William Lee", "2023-11-05"), 0);
employees.addEmployee(new Employee("Olivia White", "2019-05-10"), 1800);
employees.addEmployee(new Employee("mahmoud gamal", "2023-01-01"), 0);
employees.addEmployee(new Employee("kholoud ali", "2015-02-15"), 2000);
employees.addEmployee(new Employee("adam ali", "2013-03-20"), 2100);
employees.addEmployee(new Employee("shahd abdo", "2023-04-05"), 0);
employees.addEmployee(new Employee("maryam ahmed", "2017-05-10"), 1900);
employees.addEmployee(new Employee("tasnem sayed", "2023-07-01"), 0);
employees.addEmployee(new Employee("gana khaled", "2011-02-15"), 2200);
employees.addEmployee(new Employee("Sophia Martinez", "2023-05-20"), 0);
employees.addEmployee(new Employee("nada deyaa", "2023-11-05"), 0);
employees.addEmployee(new Employee("mona ali", "2019-05-10"), 1800);
displayAllEmployees();
