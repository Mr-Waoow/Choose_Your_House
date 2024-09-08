import { Component, EventEmitter, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../shared/services/data-sharing.service';
import { Methods } from '../shared/classes/methods';

@Component({
  selector: 'pre-step',
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.css',
})
export class PreStepComponent {
  //Event emitter.
  @Output() sendLang = new EventEmitter<any>();

  //Variables.
  methods: Methods = new Methods();
  translateGetLangs!: any[];
  faCheck = faCheck;
  selectBtnClicked = false;
  submitBtn: HTMLButtonElement | null = null;
  private _text: string = '';
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
    if (this._text !== '') {
      this.submitBtn?.removeAttribute('disabled');
      this.submitBtn?.classList.add('active');
    } else {
      this.submitBtn?.setAttribute('disabled', 'true');
      this.submitBtn?.classList.remove('active');
    }
  }

  //Constructor.
  constructor(private dataSharingService: DataSharingService) {}

  //Lifecycle hook.
  ngOnInit(): void {
    this.submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    this.dataSharingService.getLanguages().subscribe((langs) => {
      this.translateGetLangs = langs;
    });
  }

  //Send Language to parent.
  sendLanguageToParent(lang: string) {
    this.dataSharingService.setChoosenLang(lang);
  }

  //Select button clicked.
  selecteBtn(evt: Event): void {
    this.selectBtnClicked = this.methods.selecteBtn(evt);
  }
}
