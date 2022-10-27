import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ViewChild('box1') box1: any;
  a = 10;
  b = 20;
  parentEmp: any;
  getDataFromChild(childEmp: any) {
    this.parentEmp = childEmp;
  }
  constructor() {
    console.log('Parent constructor');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(document.getElementById('para1'));
    console.log(this.box1);
    this.box1.nativeElement.focus();
    this.box1.nativeElement.style.color = 'red';
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    // clean up
    console.log('Parent ngOnDestory');
  }
}
