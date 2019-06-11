import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenuComponent } from './menu/menu.component';
import { VisitComponent } from './visit/visit.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule} from '@angular/material';
import { SituationDangerousComponent } from './situation-dangerous/situation-dangerous.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    LoginComponent,
    WelcomePageComponent,
    MenuComponent,
    VisitComponent,
    HistoryComponent,
    ProfileComponent,
    SituationDangerousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
