import { Component, OnInit, EventEmitter, SimpleChange } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['aChild'],
  outputs: ['empEvent'],
})
export class Child1Component implements OnInit {
  aChild: any;
  emp = { name: 'sachin', age: 45, add: 'mumbai' };
  x: number;

  empEvent = new EventEmitter();
  senDataToParent() {
    this.empEvent.emit(this.emp);
  }
  // HttpClient Service is injected to Child1Component
  // constructor(private httpObj: HttpClient) {
  constructor() {
    this.x = 0;
    console.log('child constructor');
  }
  ngOnChanges(changes: SimpleChange) {
    console.log('child ngOnChanges');
    console.log(changes);
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  /* ngDoCheck() {
    console.log('child ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('child ngOnDestory');
  } */
}
