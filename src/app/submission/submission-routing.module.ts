import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionComponent } from './submission.component';
import { LoadingComponent } from './loading/loading.component';
import { DoneComponent } from './done/done.component';

const routes: Routes = [
  {
    path: 'Submission',
    component: SubmissionComponent,
    children: [
      { path: 'Loading', component: LoadingComponent },
      { path: 'Done', component: DoneComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionRoutingModule { }
