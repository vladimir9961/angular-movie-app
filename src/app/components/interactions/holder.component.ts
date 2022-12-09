import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss']
})
export class HolderComponent implements OnInit {
  @Input() Name: string;
  @Input() IdOfItem: number;
  @Input() TYPE_OF_FETCHED_DATA: string;

  constructor() { }
  ngOnInit(): void {

  }

}
