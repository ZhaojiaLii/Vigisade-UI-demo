import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { VisitComponent } from './visit/visit.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SituationDangerousComponent } from './situation-dangerous/situation-dangerous.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path: '', component: LoginComponent, data: {animation: 'login'}},
  {path: 'tutorial', component: TutorialComponent, data: {animation: 'tutorial'}},
  {path: 'profile', component: ProfileComponent, data: {animation: 'profile'}},
  {path: 'welcome', component: WelcomePageComponent, data: {animation: 'welcome'}},
  {path: 'menu', component: MenuComponent, data: {animation: 'menu'}},
  {path: 'situation-dangerous', component: SituationDangerousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
