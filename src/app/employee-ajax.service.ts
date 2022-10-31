import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeAjaxService {
  constructor(private httpClient: HttpClient) {}

  getAllEmployees() {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  addEmployee(payload: any) {
    return this.httpClient.post('http://localhost:3000/employees', payload);
  }
  deleteEmployee(id: any) {
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`);
  }
}
