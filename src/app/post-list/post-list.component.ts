import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  @Input() postListTitle: string = '';

  @Input() postIsLogin: boolean = false;

  childMessage: string = 'Hello from child component';
  postCount: number = 0;
}
