import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProbComponent } from './prob.component';
import { ArticleComponent } from './article/article.component';
import { MassageComponent } from './massage/massage.component';

const routes: Routes = [
  {
    path: 'Describe-House',
    component: ProbComponent,
    children: [
      { path: '', component: ArticleComponent },
      { path: 'Article', component: ArticleComponent },
      { path: 'Massage', component: MassageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProbRoutingModule { }
