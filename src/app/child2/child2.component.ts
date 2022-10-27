import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  inputs:['child1']
})
export class Child2Component implements OnInit {
  @Input() b: any;
  child1:any;
  
  constructor() {}

  ngOnInit(): void {}
}
