import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { QuillModule } from 'ngx-quill';
import { EditorModule } from 'primeng/editor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { HouseComponent } from './house.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreStepComponent } from './pre-step/pre-step.component';
import { SelectionComponent } from './selection/selection.component';
import { ProbComponent } from './prob/prob.component';
import { SubmissionComponent } from './submission/submission.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { LocationComponent } from './selection/location/location.component';
import { TypeComponent } from './selection/type/type.component';
import { SelectionModule } from './selection/selection.module';
import { ArticleComponent } from './prob/article/article.component';
import { MassageComponent } from './prob/massage/massage.component';
import { ProbModule } from './prob/prob.module';
import { LoadingComponent } from './submission/loading/loading.component';
import { DoneComponent } from './submission/done/done.component';
import { SubmissionModule } from './submission/submission.module';

@NgModule({
  declarations: [
    HouseComponent,
    PreStepComponent,
    SelectionComponent,
    ProbComponent,
    SubmissionComponent,
    PreloaderComponent,
    LocationComponent,
    TypeComponent,
    ArticleComponent,
    MassageComponent,
    LoadingComponent,
    DoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, './i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
    FontAwesomeModule,
    QuillModule.forRoot(),
    EditorModule,
    CommonModule,
    FormsModule,
    ProgressBarModule,
    ToastModule,
    SelectionModule,
    ProbModule,
    SubmissionModule,
  ],
  providers: [provideHttpClient(), [CookieService]],
  bootstrap: [HouseComponent],
})
export class AppModule {}
