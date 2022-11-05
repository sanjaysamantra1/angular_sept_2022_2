import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  exhaustMap,
  filter,
  forkJoin,
  fromEvent,
  interval,
  map,
  mergeMap,
  of,
  range,
  take,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css'],
})
export class Observable3Component implements OnInit {
  publisher: any;
  publisher2: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    // this.fetchDataFromMultipleAPIs();
    // this.pipeDemo();
    // this.zipDemo();
    // this.filterDemo();
    // this.takeDemo();
    // this.mergeMapDemo();
    this.exhaustMapDemo();
  }

  fetchDataFromMultipleAPIs() {
    let request1 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    let request2 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    let request3 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    forkJoin([request1, request2, request3]).subscribe(([res1, res2, res3]) => {
      console.log(res1, res2, res3);
    });
  }
  pipeDemo() {
    const publisher = range(1, 10);
    const subcriber = publisher.subscribe((x) => console.log(x));

    const publisher2 = publisher.pipe(map((ele) => ele * ele));
    const subcriber2 = publisher2.subscribe((x) => console.log(x));
  }
  zipDemo() {
    let publisher1 = of(32, 31, 34);
    let publisher2 = of('sanjay', 'ranjan', 'bishnu');
    let publisher3 = of('bang', 'chennai', 'hyderabad');
    let finalPublisher = zip(publisher1, publisher2, publisher3).pipe(
      map(([age, name, add]) => ({ age, name, add }))
    );

    finalPublisher.subscribe((data) => console.log(data));
  }
  filterDemo() {
    const publisher = range(1, 10);
    publisher.subscribe((x) => console.log(x));

    const even_publisher = publisher.pipe(filter((x) => x % 2 == 0));
    even_publisher.subscribe((x) => console.log(x));
  }
  takeDemo() {
    this.publisher = interval(500);
    this.publisher2 = this.publisher.pipe(take(5));

    this.publisher2.subscribe((x: any) => console.log(x));
  }
  mergeMapDemo() {
    const publisher1 = of(1, 2, 3);

    // const subscriber1 = publisher1.subscribe((name) => {
    //   const url = `https://jsonplaceholder.typicode.com/users/${name}`;
    //   this.httpClient.get(url).subscribe((userDetails) => {
    //     console.log(userDetails);
    //   });
    // });

    publisher1
      .pipe(
        mergeMap((userId) => {
          const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
          return this.httpClient.get(url);
        })
      )
      .subscribe((userDetails) => {
        console.log(userDetails);
      });
  }
  exhaustMapDemo() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      exhaustMap(() => this.httpClient.get('https://fakestoreapi.com/products'))
    );
    result.subscribe((x) => console.log(x));
  }
}
