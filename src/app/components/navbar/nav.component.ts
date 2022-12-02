import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userExist = false;
  @HostListener('window:storage')
  onStorageChange() {
    console.log('change...');
    if (localStorage.getItem('session_id') == null) {
      this.userExist = false
    } else {
      this.userExist = true
      console.log('ima')
    }
    console.log(localStorage.getItem('session_id'))
  }
  addUsuario: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userExist)
  }

}
