import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IntroComponent} from './pages/intro/intro.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpQuestionnaireCoachComponent} from './pages/sign-up-questionnaire-coach/sign-up-questionnaire-coach.component';
import {SignUpQuestionnaireUserComponent} from './pages/sign-up-questionnaire-user/sign-up-questionnaire-user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SignUpComponent,
    NotFoundComponent,
    SignInComponent,
    SignUpQuestionnaireCoachComponent,
    SignUpQuestionnaireUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
