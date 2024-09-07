import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private languagesSubject = new BehaviorSubject<any[]>([]);
  languages$ = this.languagesSubject.asObservable();

  private choosenLangSubject = new BehaviorSubject<string>('');
  choosenLang$ = this.choosenLangSubject.asObservable();

  setLanguages(languages: any []) {
    this.languagesSubject.next(languages);
  }

  getLanguages() {
    return this.languagesSubject.value;
  }

  setChoosenLang(lang: string) {
    this.choosenLangSubject.next(lang);
  }

  getChoosenLang() {
    return this.choosenLangSubject.value;
  }
}
