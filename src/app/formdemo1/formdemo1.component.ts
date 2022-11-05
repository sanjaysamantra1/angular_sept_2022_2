import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formdemo1',
  templateUrl: './formdemo1.component.html',
  styleUrls: ['./formdemo1.component.css'],
})
export class Formdemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = '';
  age: number = 0;
  gender:string='';
}
