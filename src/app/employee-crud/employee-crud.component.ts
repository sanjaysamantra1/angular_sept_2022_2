import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  constructor() {}


  ngOnInit(): void {}

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'ranjan', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];

  addEmployee() {
    Swal.fire('Good job!', 'Employee Added Successfully!', 'success');
  }
  editEmployee() {}
  deleteEmployee() {
    Swal.fire({
      title: 'Do you want to Delete Employee?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Not Deleted', '', 'info');
      }
    });
  }

  selectedEmployee:any;
  displayStyle = 'none';
  openPopup(emp:any) {
    this.selectedEmployee = emp;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
