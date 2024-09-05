import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreStepComponent } from './pre-step/pre-step.component';
import { SelectionComponent } from './selection/selection.component';
import { ProbComponent } from './prob/prob.component';
import { SubmissionComponent } from './submission/submission.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Start' },
  { path: 'Start', component: PreStepComponent },
  { path: 'Select-House', component: SelectionComponent },
  { path: 'Describe-House', component: ProbComponent },
  { path: 'Submission', component: SubmissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
