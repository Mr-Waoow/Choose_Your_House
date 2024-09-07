import { Component } from '@angular/core';

@Component({
  selector: 'submission',
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css',
})
export class SubmissionComponent {
  isDone: boolean = false;
  loadingCount!: number;

  constructor() {
    this.load();
  }
  load(currentValue: number = 0): number {
    this.loadingCount = currentValue;
    if (currentValue < 100) {
      setTimeout(() => {
        return this.load(currentValue + 1);
      }, 500);
    } else {
      const preLoader = document.getElementById('preLoader') as HTMLDivElement;
      setTimeout(() => {
        preLoader.style.opacity = '1';
        preLoader.style.display = 'block';
        this.isDone = true;
        setTimeout(() => {
          preLoader.style.display = 'none';
          preLoader.style.opacity = '0';
        }, 700);
      }, 1500);
      return 0;
    }
    return 0;
  }
}
