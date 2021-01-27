import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page1',
  templateUrl: './table-page1.component.html',
  styleUrls: ['./table-page1.component.css']
})
export class TablePage1Component implements OnInit {

  constructor() { }

  options: string[] = ["Computer", "Physics", "Chemistry"];

  selectedDepartment = "Computer";
  nameSearchInput : string = '';

  filteredEmployees;

  searchbyname = {};

  headers = [ 'Employee Name', 'Age', 'Email Address', 'Departments' ];

  employees = [
    {
      employeename: "Employee One",
      Age: 40,
      EmailAddress: "one@gmail.com",
      Departments: ["Computer", "Physics"],
    },
    {
      employeename: "Employee Two",
      Age: 10,
      EmailAddress: "Two@gmail.com",
      Departments: ["Computer"],
    },
    {
      employeename: "Employee Three",
      Age: 10,
      EmailAddress: "Three@gmail.com",
      Departments: ["Physics", "Chemistry"],
    },
    {
      employeename: "Employee Four",
      Age: 60,
      EmailAddress: "Four@gmail.com",
      Departments: ["Chemistry", "Physics"],
    },
    {
      employeename: "Employee Five",
      Age: 70,
      EmailAddress: "Five@gmail.com",
      Departments: ["Computer", "Physics", "Chemistry"],
    },
    {
      employeename: "Employee Six",
      Age: 70,
      EmailAddress: "Six@gmail.com",
      Departments: ["Computer", "Physics"],
    },
  ];

 

  employeeName = "Name / Email";

  sort = "SortBy";

  filteredArray = [...this.employees];
  filterArray(){
    // console.log('Name Searched is !', this.nameSearchInput);
   
    // No users, empty list.
    if (!this.employees.length) {
      this.filteredArray = [];
      return;
    }

    // no search text, all users.
    if (!this.nameSearchInput) {      
      this.filteredArray = [...this.employees]; // keep your usersList immutable
      return;
    }

    const users = [...this.employees]; // keep your usersList immutable
    const properties = Object.keys(users[0]); // get user properties

    // check all properties for each user and return user if matching to searchText
    this.filteredArray =  users.filter((user) => {
      return properties.find((property) => {
        const valueString = user[property].toString().toLowerCase();
        return valueString.includes(this.nameSearchInput.toLowerCase());
      })
      ? user
      : null;
    });
    
  }

  // }

  ngOnInit(): void {
  }

}
