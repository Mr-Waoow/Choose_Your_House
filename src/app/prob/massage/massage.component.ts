import { Component } from '@angular/core';
import { DataSharingService } from '../../shared/services/data-sharing.service';
import { faEye, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'massage',
  templateUrl: './massage.component.html',
  styleUrl: '../prob.component.css',
})
export class MassageComponent {
  faEye = faEye;
  faCalendarCheck = faCalendarCheck;
  isRadioClicked = false;
  isErrorMessage = false;
  classEnglish: string = 'english';
  article: any[] = [];
  topic: string = '';
  language: string = '';

  //constructor.
  constructor(
    private dataSharingService: DataSharingService,
    private router: Router
  ) {}

  //Lifecycle hook.
  ngOnInit(): void {
    this.dataSharingService.getCookieValue().subscribe((lang) => {
      if (lang === '') {
        this.language = 'en';
      }
      this.language = lang;
    });
    if (this.language === 'en') {
      this.classEnglish = 'english';
    } else {
      this.classEnglish = '';
    }
    this.dataSharingService.setPreviousPage('Describe-House/Article');
    this.dataSharingService.getTopic().subscribe((topic) => {
      this.topic = topic;
    });
    this.dataSharingService.getArticle().subscribe((article) => {
      this.article = article;
    });
    if (this.topic === '' || this.article.length === 0) {
      this.router.navigate(['Describe-House/Article']);
    }
  }

  onChange(): void {
    this.isRadioClicked = true;
  }
  //submit.
  submit(): void {
    if (this.isRadioClicked) {
      this.router.navigate(['Submission/Loading']);
    } else {
      this.isErrorMessage = true;
    }
  }
}
