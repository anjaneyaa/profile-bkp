import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommunicationComponent } from './communication/communication.component';

const routes: Routes = [
  {  path: '',  component: IntroductionComponent}, 
  {  path: 'about',  component: EducationComponent},
  {  path: 'resume',  component: ExperienceComponent},
  {  path: 'project',  component: ProjectsComponent},
  {  path: 'contact',  component: CommunicationComponent}, 
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
