import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss']
})
export class HolderComponent implements OnInit {
  accId: number;
  sessId: string;
  itemExists: boolean;
  @Input() IdOfItem: number;
  @Input() TYPE_OF_FETCHED_DATA: string;

  constructor() { }
  ngOnInit(): void {
    this.accId = parseInt(localStorage.getItem('account_id'));
    this.sessId = JSON.parse(localStorage.getItem('session_id'))
  }

}
