import { Component } from '@angular/core';
import { DataSharingService } from '../../shared/services/data-sharing.service';

@Component({
  selector: 'done',
  templateUrl: './done.component.html',
  styleUrl: '../submission.component.css',
})
export class DoneComponent {
  //constructor.
  constructor(private dataSharingService: DataSharingService) {}

  //Lifecycle hook.
  ngOnInit(): void {
    this.dataSharingService.setPreviousPage('Describe-House/Massage');
  }

  //exit.
  exit(): void {
    const exitBtn = document.getElementById('exitBtn') as HTMLButtonElement;
    exitBtn.click();
  }
}
