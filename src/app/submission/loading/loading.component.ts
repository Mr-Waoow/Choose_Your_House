import { Component } from '@angular/core';
import { DataSharingService } from '../../shared/services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrl: '../submission.component.css',
})
export class LoadingComponent {
  loadingCount!: number;
  //constructor.
  constructor(
    private dataSharingService: DataSharingService,
    private router: Router
  ) {
    this.load();
  }

  //Lifecycle hook.
  ngOnInit(): void {
    this.dataSharingService.setPreviousPage('Describe-House/Massage');
  }

  load(currentValue: number = 0): number {
    this.loadingCount = currentValue;
    if (currentValue < 100) {
      setTimeout(() => {
        return this.load(currentValue + 1);
      }, 500);
    } else {
      setTimeout(() => {
        this.router.navigate(['Submission/Done']);
      }, 1000);
      return 0;
    }
    return 0;
  }
}
