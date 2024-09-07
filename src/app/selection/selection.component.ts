import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Methods } from '../shared/classes/methods';

@Component({
  selector: 'selection',
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent {
  //Variables.
  faCheck = faCheck;
  isLocationSelected = false;
  isTypeSelected = false;
  active: string = '';
  isNextStep = false;
  method: Methods = new Methods();
  submitType: HTMLButtonElement | null = null;

  //Lifecycle hook.
  ngOnInit(): void {
    this.submitType = document.getElementById(
      'submitType'
    ) as HTMLButtonElement;
  }

  //Select button clicked.
  selecteBtn(evt: Event, type: string): void {
    if (type === 'location') {
      this.active = 'active';
      this.isLocationSelected = this.method.selecteBtn(evt);
    } else if (type === 'type') {
      this.active = 'active';
      this.isTypeSelected = this.method.selecteBtn(evt);
    }
  }

  //Next button clicked.
  nextBtn(): void {
    const preLoader = document.getElementById('preLoader') as HTMLDivElement;
    if (this.isLocationSelected) {
      preLoader.style.opacity = '1';
      preLoader.style.display = 'block';
      setTimeout(() => {
        preLoader.style.display = 'none';
        preLoader.style.opacity = '0';
      }, 500);
      this.isNextStep = true;
      this.active = '';
    }
  }
}
