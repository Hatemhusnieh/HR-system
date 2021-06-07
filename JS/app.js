'use strict';

let total = 0;
let allEmployee = [];
let nueTable = document.getElementById('my-table');
const hrData = document.getElementById('my-form');

function Employee(name, email, department) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.randomSalary();
  allEmployee.push(this);
}

function tableHeader() {
  let header = document.createElement('tr');
  header.setAttribute('id', 'table-header');
  nueTable.appendChild(header);

  let tableName = document.createElement('th');
  tableName.textContent = 'Name';
  header.appendChild(tableName);

  let tableEmail = document.createElement('th');
  tableEmail.textContent = 'Email';
  header.appendChild(tableEmail);

  let tableDep = document.createElement('th');
  tableDep.textContent = 'Department';
  header.appendChild(tableDep);

  let tableSalary = document.createElement('th');
  tableSalary.textContent = 'Salary';
  header.appendChild(tableSalary);
}

function displayTotal() {
  let tableTotal = document.createElement('tr');
  tableTotal.setAttribute('id', 'table-total');
  nueTable.appendChild(tableTotal);
  let elTotal = document.createElement('th');
  elTotal.setAttribute('colspan', '4');
  tableTotal.appendChild(elTotal);
  elTotal.textContent = total;
}

Employee.prototype.randomSalary = function () {
  return this.salary = Math.round(Math.random() * (500 - 100) + 100);
};


Employee.prototype.displayTable = function () {
  let row2 = document.createElement('tr');
  nueTable.appendChild(row2);

  let row2D1 = document.createElement('td');
  row2D1.textContent = this.name;
  row2.appendChild(row2D1);

  let row2D2 = document.createElement('td');
  row2D2.textContent = this.email;
  row2.appendChild(row2D2);

  let row2D3 = document.createElement('td');
  row2D3.textContent = this.department;
  row2.appendChild(row2D3);

  let row2D4 = document.createElement('td');
  row2D4.textContent = this.salary;
  row2.appendChild(row2D4);

  total += this.salary;
  this.total = total;
};

function toLocalStorage() {
  localStorage.setItem('allEmployee', JSON.stringify(allEmployee));
}


hrData.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(event.target.name.value, event.target.email.value, event.target.department.value);
  let nueEmployee = new Employee(event.target.name.value, event.target.email.value, event.target.department.value);
  if (!document.getElementById('table-header')) {
    tableHeader();
  }
  nueEmployee.displayTable();
  if (!document.getElementById('table-total')) {
    displayTotal();
  } else {
    let deltotal = document.getElementById('table-total');
    deltotal.remove();
    displayTotal();
  }
  // console.log(allEmployee);
  toLocalStorage();
  hrData.reset('');
});

function displayOld() {
  let header = document.createElement('tr');
  header.setAttribute('id', 'table-header');
  nueTable.appendChild(header);

  let tableName = document.createElement('th');
  tableName.textContent = 'Name';
  header.appendChild(tableName);

  let tableEmail = document.createElement('th');
  tableEmail.textContent = 'Email';
  header.appendChild(tableEmail);

  let tableDep = document.createElement('th');
  tableDep.textContent = 'Department';
  header.appendChild(tableDep);

  let tableSalary = document.createElement('th');
  tableSalary.textContent = 'Salary';
  header.appendChild(tableSalary);
  for (let i = 0; i < allEmployee.length; i++) {
    let row2 = document.createElement('tr');
    nueTable.appendChild(row2);

    let row2D1 = document.createElement('td');
    row2D1.textContent = allEmployee[i].name;
    row2.appendChild(row2D1);

    let row2D2 = document.createElement('td');
    row2D2.textContent = allEmployee[i].email;
    row2.appendChild(row2D2);

    let row2D3 = document.createElement('td');
    row2D3.textContent = allEmployee[i].department;
    row2.appendChild(row2D3);

    let row2D4 = document.createElement('td');
    row2D4.textContent = allEmployee[i].salary;
    row2.appendChild(row2D4);
    if (i === allEmployee.length - 1) {
      for (let j = 0; j < allEmployee.length; j++) {
        total += allEmployee[j].salary;
      }
      let tableTotal = document.createElement('tr');
      tableTotal.setAttribute('id', 'table-total');
      nueTable.appendChild(tableTotal);
      let elTotalHeader = document.createElement('th');
      tableTotal.appendChild(elTotalHeader);
      elTotalHeader.textContent = 'Total';
      let elTotal = document.createElement('th');
      elTotal.setAttribute('colspan', '4');
      tableTotal.appendChild(elTotal);
      elTotal.textContent = total;
    }
  }
}

if (localStorage.getItem('allEmployee')) {
  allEmployee = JSON.parse(localStorage.getItem('allEmployee'));
  // console.log(allEmployee);
  displayOld();
}
