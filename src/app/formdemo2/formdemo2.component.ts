import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formdemo2',
  templateUrl: './formdemo2.component.html',
  styleUrls: ['./formdemo2.component.css'],
})
export class Formdemo2Component implements OnInit {
  user: any;

  constructor() {
    this.user = {
      name: 'sachin',
      age: 35,
    };
  }

  ngOnInit(): void {}

  submitMyForm(formData: any) {
    console.log(formData);
    console.log(formData.controls.firstName);
  }
}
