import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  //Variables.
  private languagesSubject = new BehaviorSubject<any[]>([]);
  languages$ = this.languagesSubject.asObservable();

  private choosenLangSubject = new BehaviorSubject<string>('');
  choosenLang$ = this.choosenLangSubject.asObservable();

  private previousPage = new BehaviorSubject<string>('');
  previousPage$ = this.previousPage.asObservable();

  private topic = new BehaviorSubject<string>('');
  topic$ = this.topic.asObservable();

  private article = new BehaviorSubject<any[]>([]);
  article$ = this.article.asObservable();

  private cookieValue = new BehaviorSubject<string>('');
  cookieValue$ = this.cookieValue.asObservable();

  //Constructor.
  constructor() {}

  //Setters and Getters.
  setLanguages(languages: any[]) {
    this.languagesSubject.next(languages);
  }

  getLanguages(): Observable<any[]> {
    return this.languages$;
  }

  setChoosenLang(lang: string) {
    this.choosenLangSubject.next(lang);
  }

  getChoosenLang(): Observable<string> {
    return this.choosenLang$;
  }

  setPreviousPage(page: string) {
    this.previousPage.next(page);
  }

  getPreviousPage(): Observable<string> {
    return this.previousPage$;
  }

  setTopic(topic: string) {
    this.topic.next(topic);
  }

  getTopic(): Observable<string> {
    return this.topic$;
  }

  setArticle(article: any[]) {
    this.article.next(article);
  }

  getArticle(): Observable<any[]> {
    return this.article$;
  }

  setCookieValue(value: string) {
    this.cookieValue.next(value);
  }

  getCookieValue(): Observable<string> {
    return this.cookieValue$;
  }
}
