import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/login.service';
import { AuthInterceptor } from './interceptor/auth';
import { MinerViewComponent } from './miner-view/miner-view.component';
import { HomeService } from './home/home.service';

import { AddMinerComponent } from './add-miner/add-miner.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMinerTableComponent } from './add-miner/add-miner-table/add-miner-table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    MinerViewComponent,
    AddMinerComponent,
    AddMinerTableComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
   MatGridListModule,
    BrowserAnimationsModule,
   MatCardModule,
   MatListModule,
    MatButtonModule,
   MatExpansionModule,
   MatFormFieldModule,
   MatInputModule,
   MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   FormsModule,
   ScrollingModule,
   MatProgressSpinnerModule,
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
