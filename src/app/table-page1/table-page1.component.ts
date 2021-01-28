import { Component, OnInit } from '@angular/core';
import { SorttablePipe } from '../sorttable.pipe';

@Component({
  selector: 'app-table-page1',
  templateUrl: './table-page1.component.html',
  styleUrls: ['./table-page1.component.css']
})
export class TablePage1Component implements OnInit {

  constructor() { }

  options: string[] = ["Computer", "Physics", "Chemistry"];
  options2 = [{
    id :1,
    name :  "name(a-z)"
  },
  {
    id :2,
    name :  "name(z-a)"
  },
  {
    id :3,
    name :  "age"
  }
];
  selectedoption = this.options2.indexOf[0];

  selectedDepartment = "Computer";
  nameSearchInput : string = '';
  // sortingOption ;

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
  ].sort(this.sortFunc);

  // newarr = this.employees.sort((a, b) => a.employeename - b.index);

  employeeName = "Name / Email";

  // sort = "SortBy";

  sortFunc(a, b) {
    if ( a.employeename < b.employeename ){
      return -1;
    }
    else if ( a.employeename > b.employeename ){
      return 1;
    }
    // return 0;
    // else if(this.selectedoption.indexOf[0] ){
    //   if ( a.employeename < b.employeename ){
    //     return 1;
    //   }
    //   if ( a.employeename > b.employeename ){
    //     return -1;
    //   }
    //   return 0;
    // }
    // else if (this.selectedoption.indexOf[1] ){
    //   if ( a.employeename < b.employeename ){
    //     return 1;
    //   }
    //   if ( a.employeename > b.employeename ){
    //     return -1;
    //   }
    //   return 0;
    // }
  }

  sort (a, b,selectedoption) {
    if(this.selectedoption.indexOf[0] ){
        if ( a.employeename < b.employeename ){
          return 1;
        }
        if ( a.employeename > b.employeename ){
          return -1;
        }
        return 0;
      }
      else if (this.selectedoption.indexOf[1] ){
        if ( a.employeename < b.employeename ){
          return 1;
        }
        if ( a.employeename > b.employeename ){
          return -1;
        }
        return 0;
      }
  }

  filteredArray = [...this.employees];
  filterArray(){
   
     const users = [...this.employees]; 
    const properties = Object.keys(users[0]); 

   
    this.filteredArray =  users.filter((user) => {
      return properties.find((property) => {
        const valueString = user[property].toString().toLowerCase();
        return valueString.includes(this.nameSearchInput.toLowerCase());
      })
      ? user
      : null;
    });
    
  }


  ngOnInit(): void {
    
  }

}
