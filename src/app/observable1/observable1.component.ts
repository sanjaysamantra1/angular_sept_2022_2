import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css'],
})
export class Observable1Component implements OnInit {
  constructor(private http: HttpClient) {}
  promiseVSObserbale() {
    // promise
    const promiseObj = fetch('https://jsonplaceholder.typicode.com/comments');
    promiseObj.then(
      (response) => console.log(response),
      (err) => console.log(err)
    );

    // observable
    const observableObj = this.http.get(
      'https://jsonplaceholde.typicode.com/comments' // 500 comments
    );

    observableObj.subscribe(
      (partial) => console.log(partial), // 5
      (err) => console.log(err),
      () => console.log('completed') // 1
    );
  }

  publisherAndSubscriber() {
    // publisher
    const publisher1 = new Observable(function (observer) {
      observer.next('aaaaa');
      observer.next('bbbbb');
      observer.next('ccccc');
      observer.complete();
    });

    // subscriber
    const subscriber1 = publisher1.subscribe(
      (next) => {
        console.log(next);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed...');
      }
    );
  }
  ngOnInit(): void {
    this.promiseVSObserbale();
    this.publisherAndSubscriber();
  }
}
