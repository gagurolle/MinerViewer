import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/login.service';
import { AuthInterceptor } from './interceptor/auth';
import { MinerViewComponent } from './miner-view/miner-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    AuthFormComponent,
    LoginComponent,
    MinerViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'auth', component: LoginComponent },
    ])
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true,
    deps: []
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
