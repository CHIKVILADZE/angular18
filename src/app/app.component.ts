import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'angular18';

  appPostTitle: string = 'Post1';

  appIsLogin: boolean = false;

  @ViewChild(PostListComponent) childMessage: any;

  constructor() {
    console.log('child message', this.childMessage);
  }

  ngAfterViewInit() {
    console.log('child message2', this.childMessage);
  }
}
