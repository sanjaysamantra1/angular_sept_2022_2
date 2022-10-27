import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  // Dependency Injection (Emp Comp is Dependent On EmpService)
  constructor(public employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.getAllEmps();
  }
  getAllEmps() {
    this.employees = this.employeesService.getAllEmployees();
  }
  getMaleEmps() {
    this.employees = this.employeesService.getMaleEmployees();
  }
  getFemaleEmps() {
    this.employees = this.employeesService.getFemaleEmployees();
  }
}
