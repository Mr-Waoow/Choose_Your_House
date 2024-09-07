import { Component } from '@angular/core';
import { faCalendarCheck, faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'prob',
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.css',
})
export class ProbComponent {
  faEye = faEye;
  faCalendarCheck = faCalendarCheck;
  isNextStep = false;
  isTopicFilled = true;
  isArticleFilled = true;
  articleTemplate : any[] = []
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


  submit(): void {
    const preLoader = document.getElementById('preLoader') as HTMLDivElement;
    if (this.topic !== '') {
      this.isTopicFilled = true;
      if (this.article.length > 0) {
        this.isArticleFilled = true;
        preLoader.style.opacity = '1';
        preLoader.style.display = 'block';
        setTimeout(() => {
          preLoader.style.display = 'none';
          preLoader.style.opacity = '0';
        }, 500);
        this.articleTemplate = this.article;
        this.isNextStep = true;
      } else {
        this.isArticleFilled = false;
      }
    } else {
      this.isTopicFilled = false;
    }
  }
}
