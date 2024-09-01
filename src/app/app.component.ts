import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post-list/post-list.component';
import { CardComponent } from './card/card.component';
import { NgComponentOutlet } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    PostListComponent,
    CardComponent,
    NgComponentOutlet,
    ProfileComponent,
    ProfileEditorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular18';

  userName: string = 'John Doe';

  constructor(private viewContainer: ViewContainerRef) {}

  loadComponent() {
    this.viewContainer.createComponent(PostListComponent);
  }

  removeComponent() {
    this.viewContainer.remove();
  }

  changeUser() {
    this.userName = 'John Smith';
  }
}
