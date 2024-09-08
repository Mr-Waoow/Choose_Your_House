import { Component } from '@angular/core';
import { DataSharingService } from '../../shared/services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrl: '../prob.component.css',
})
export class ArticleComponent {
  isTopicFilled = true;
  isArticleFilled = true;
  language: string = '';
  classEnglish: string = 'english';
  private _topic: string = '';
  get topic(): string {
    return this._topic;
  }
  set topic(value: string) {
    this._topic = value;
  }
  private _article: any[] = [];
  get article(): any[] {
    return this._article;
  }
  set article(value: any[]) {
    this._article = value;
  }

  //constructor.
  constructor(
    private dataSharingService: DataSharingService,
    private router: Router
  ) {}

  //Lifecycle hook.
  ngOnInit(): void {
    this.dataSharingService.setPreviousPage('Select-House/Type');
    this.dataSharingService.getCookieValue().subscribe((lang) => {
      if (lang === '') {

      this.language = "en";
      }
      this.language = lang;
    });
    if (this.language==='en') {
      this.classEnglish = 'english';
    }
    else {
      this.classEnglish = '';
    }
  }

  //submit.
  submit(): void {
    if (this.topic !== '') {
      this.isTopicFilled = true;
      if (this.article.length > 0) {
        this.isArticleFilled = true;
        this.dataSharingService.setTopic(this.topic);
        this.dataSharingService.setArticle(this.article);
        this.router.navigate(['/Describe-House/Massage']);
      } else {
        this.isArticleFilled = false;
      }
    } else {
      this.isTopicFilled = false;
    }
  }
}
