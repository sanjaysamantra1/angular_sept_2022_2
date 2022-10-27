import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'saChIn tEnDulKaR';
  mySal = 5000;
  today = new Date();

  user = { name: 'sachin', age: 45, add: 'mumbai' };
  cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota', 'Audi'];
  msg: string = 'Hello';
  msg2: string = 'Hiiii';
  searchText: string = '';

  candinal: number = 21;

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'sita', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'male' },
    { eId: 102, name: 'geeta', sal: 9000, gender: 'female' },
  ];

  arr = [10, 30, 50, 20, 40];
}
