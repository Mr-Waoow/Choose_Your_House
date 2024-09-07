import { Component, EventEmitter, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { DataSharingService } from '../shared/data-sharing.service';

@Component({
  selector: 'pre-step',
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.css',
})
export class PreStepComponent {
  //Event emitter.
  @Output() sendLang = new EventEmitter<any>();
  translateGetLangs!: any[];

  //Variables.
  faCheck = faCheck;

  //Constructor.
  constructor(private dataSharingService: DataSharingService) {}

  //Lifecycle hook.
  ngOnInit(): void {
    this.translateGetLangs = this.dataSharingService.getLanguages();
  }

  //Send Language to parent.
  sendLanguageToParent(lang: string) {
    this.dataSharingService.setChoosenLang(lang);
  }
}
