import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from 'src/app/interfaces/alert.interface';
@Injectable({
  providedIn: 'root'
})
export class CallAlertService {

  displayAlert: Subject<boolean> = new Subject<boolean>();
  textMessage: string;
  alertType: string;
  constructor() {
    let object = {
      test: "",
      test2: ''
    }
  }
}
