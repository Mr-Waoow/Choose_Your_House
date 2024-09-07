import { Component } from '@angular/core';
import { faCalendarCheck, faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'prob',
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.css',
})
export class ProbComponent {
  faEye = faEye;
  faCalendarCheck = faCalendarCheck;
  private _text: any[] = [];
  get text(): any[] {
    return this._text;
  }
  set text(value: any[]) {
    this._text = value;
  }
}
