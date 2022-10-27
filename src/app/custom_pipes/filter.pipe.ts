import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(employees: any[], searchText: string) {
    console.log("filter pipe's transform method called");
    let filteredEmp = employees.filter((emp) => {
      return emp.name.includes(searchText);
    });

    if (searchText) {
      return filteredEmp;
    } else {
      return employees;
    }
  }
}
