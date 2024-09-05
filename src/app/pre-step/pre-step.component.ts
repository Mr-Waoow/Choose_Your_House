import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pre-step',
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.css',
})
export class PreStepComponent {
  faCheck = faCheck;
  translate: any;

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['ar', 'en']);
    translateService.setDefaultLang('ar');
  }

  ngOnInit(): void {
    this.translate = this.translateService;
    this.loadCssFile('ar');
    this.setDirection('ar');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.setDirection(lang);
    this.loadCssFile(lang);
  }
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
}
