import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck {
  @Input() pUserName: string = '';

  constructor() {
    console.log('Constructor method triggered');
    console.log(this.pUserName);
  }

  ngOnInit() {
    console.log('NgOnInit Hook Triggered');
    console.log(this.pUserName);
  }

  ngOnChanges() {
    console.log('onChanges Triggered');
  }

  ngDoCheck() {
    console.log('NgDoChek trigger');
  }
}
