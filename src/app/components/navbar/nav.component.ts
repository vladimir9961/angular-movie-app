import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  //If session exist user is loged data recived from parent (app-component) display user profile button with logout
  @Input() isLogged;

  constructor() { }

  ngOnInit(): void {
  }

}
