import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillComponent } from './component/skill/skill.component';
import { HomeComponent } from './component/home/home.component';
import { HistoryComponent } from './component/history/history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'History', component: HistoryComponent },
  { path: 'Skill', component: SkillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
