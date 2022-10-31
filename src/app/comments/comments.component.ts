import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getAllComments().subscribe((response: Comment[]) => {
      this.comments = response;
    });
  }
}
