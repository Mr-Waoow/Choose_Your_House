import { Component } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../../shared/services/data-sharing.service';
import { Methods } from '../../shared/classes/methods';

@Component({
  selector: 'type',
  templateUrl: './type.component.html',
  styleUrl: '../selection.component.css',
})
export class TypeComponent {
  //Variables.
  faCheck = faCheck;
  isSelected = false;
  active: string = '';
  method: Methods = new Methods();

  //Constructor.
  constructor(private dataSharingService: DataSharingService) {}

  //Lifecycle hook.
  ngOnInit(): void {
    this.dataSharingService.setPreviousPage('Select-House/Location');
  }

  //Select button clicked.
  selecteBtn(evt: Event): void {
    this.active = 'active';
    this.isSelected = this.method.selecteBtn(evt);
  }
}
