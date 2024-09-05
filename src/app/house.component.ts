import { Component } from '@angular/core';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'house',
  templateUrl: './house.component.html',
  styleUrl: './house.component.css',
})
export class HouseComponent {
  title = 'Choose_Your_House';
  faXmark = faXmark;
  faArrowRight = faArrowRight;
  translate: any;

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translate = this.translateService;
  }

  get routerLinkActive() {
    return this.router.url.split('/')[1]; // Assuming the path is at position 2
  }
}
