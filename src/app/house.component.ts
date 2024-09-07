import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faArrowLeft, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { DataSharingService } from './shared/data-sharing.service';

@Component({
  selector: 'house',
  templateUrl: './house.component.html',
  styleUrl: './house.component.css',
})
export class HouseComponent implements OnInit {
  //Variables.
  title = 'Choose_Your_House';
  faXmark = faXmark;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  cookieValue!: string;

  //Constructor.
  constructor(
    public translateService: TranslateService,
    public cookieService: CookieService,
    private router: Router,
    private dataSharingService: DataSharingService
  ) {
    translateService.addLangs(['ar', 'en']);
  }

  //Lifecycle hook.
  ngOnInit(): void {
    this.dataSharingService.setLanguages(this.translateService.getLangs());
    this.cookieValue = this.cookieService.get('language');
    console.log('Initial Cookie Value:', this.cookieValue); // Debugging
    this.dataSharingService.choosenLang$.subscribe((lang) => {
      this.switchLang(lang);
      if (lang !== '')
      this.cookieValue = lang;
    });
    if (this.cookieValue) {
      this.translateService.setDefaultLang(this.cookieValue);
      this.translateService.use(this.cookieValue);
      this.switchLang(this.cookieValue);
    } else {
      this.translateService.setDefaultLang('ar');
      this.translateService.use('ar');
      this.switchLang('ar');
    }
  }

  //Switch language.
  switchLang(lang: string) {
    this.translateService.use(lang);
    this.setDirection(lang);
    this.loadCssFile(lang);
    this.cookieService.set('language', lang, 7);
  }

  //Set direction.
  setDirection(lang: string): void {
    const htmlTag = document.querySelector('html') as HTMLHtmlElement;
    if (lang === 'ar') {
      htmlTag.dir = 'rtl';
      htmlTag.lang = 'ar';
    } else {
      htmlTag.dir = 'ltr';
      htmlTag.lang = 'en';
    }
  }

  //Load CSS file.
  loadCssFile(lang: string): void {
    const headTag = document.querySelector('head') as HTMLHeadElement;
    const englishCss = headTag.querySelector(
      'link[href="englishBootstrap.css'
    ) as HTMLLinkElement;
    const arabicCss = headTag.querySelector(
      'link[href="arabicBootstrap.css'
    ) as HTMLLinkElement;
    if (lang === 'ar') {
      englishCss.disabled = true;
      arabicCss.disabled = false;
    } else {
      arabicCss.disabled = true;
      englishCss.disabled = false;
    }
  }

  //Get routerLinkActive.
  get routerLinkActive() {
    return this.router.url.split('/')[1]; // Assuming the path is at position 2
  }
}
