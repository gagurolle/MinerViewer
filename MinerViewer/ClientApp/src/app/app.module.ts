import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/login.service';
import { AuthInterceptor } from './interceptor/auth';
import { MinerViewComponent } from './miner-view/miner-view.component';
import { HomeService } from './home/home.service';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMinerComponent } from './add-miner/add-miner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AuthFormComponent,
    LoginComponent,
    MinerViewComponent,
    AddMinerComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add-miner', component: AddMinerComponent },
      { path: 'auth', component: LoginComponent },
    ]),
  ],
  providers: [HomeService,AuthService,{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true,
    deps: []
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
