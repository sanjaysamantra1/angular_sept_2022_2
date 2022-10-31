import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css'],
})
export class Observable2Component implements OnInit {
  publisher1: any;
  constructor() {}

  ngOnInit(): void {
    this.createObservables();
  }

  createObservables() {
    const cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
    const carsPublisher = from(cars);
    const carsSubscriber = carsPublisher.subscribe(
      (car) => {
        console.log('partial data received');
        console.log(car);
      },
      (err) => console.log(err),
      () => console.log('all data received')
    );

    this.publisher1 = interval(1000);
    // const subscriber1 = publisher1.subscribe((data) => console.log(data));
  }
}
