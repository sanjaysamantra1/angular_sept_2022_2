import { Component, OnInit } from '@angular/core';
import { EmployeeAjaxService } from '../employee-ajax.service';

@Component({
  selector: 'app-employee-ajax',
  templateUrl: './employee-ajax.component.html',
  styleUrls: ['./employee-ajax.component.css'],
})
export class EmployeeAJAXComponent implements OnInit {
  employees: any;

  constructor(private employeeAjaxService: EmployeeAjaxService) {}

  ngOnInit(): void {}

  fetchEmployees() {
    this.employeeAjaxService.getAllEmployees().subscribe((response) => {
      this.employees = response;
    });
  }
  addEmp(fname: any, lname: any, email: any) {
    const empObj = {
      first_name: fname.value,
      last_name: lname.value,
      email: email.value,
    };

    this.employeeAjaxService.addEmployee(empObj).subscribe((response) => {
      console.log('employee addedd successfully');
      this.fetchEmployees();
    });
  }

  deleteEmp(id:any) {
    this.employeeAjaxService.deleteEmployee(id).subscribe((response) => {
      console.log('deleted successfully');
      this.fetchEmployees();
    });
  }
}
