import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees2',
  templateUrl: './employees2.component.html',
  styleUrls: ['./employees2.component.css'],
  // providers: [EmployeesService],
})
export class Employees2Component implements OnInit {
  employees: any;
  constructor(public employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this.employeesService.getAllEmployees();
  }
}
