import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, publish, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css'],
})
export class SubjectDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.subjectExample();
  }

  subjectExample() {
    const publisher1 = new AsyncSubject();
    const subscriber0 = publisher1.subscribe((data) => console.log('subscriber-0 '+data));
    publisher1.next('AAAAA');
    publisher1.next('BBBBB');
    const subscriber1 = publisher1.subscribe((data) => console.log('subscriber-1 '+data));
    publisher1.next('CCCCC');
    const subscriber2 = publisher1.subscribe((data) => console.log('subscriber-2 '+data));
    publisher1.next('DDDDD');
    publisher1.next('EEEEE');
    publisher1.complete();
  }
}
