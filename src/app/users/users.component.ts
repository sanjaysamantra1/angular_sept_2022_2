import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const url = 'https://jsonplaceholder.ypicode.com/users';

    this.httpClient.get(url).subscribe((response: any) => {
      console.log(response);
      this.users = response;
    });
    
  }
}
