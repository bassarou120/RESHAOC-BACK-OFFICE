import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent, LoginModule} from './login';
import {AuthService} from './utils/auth.service';
import {TokenStorage} from './utils/token.storage';
import {BrowserModule} from '@angular/platform-browser';
import {JwtInterceptor} from './utils/JwtInterceptor';
import {ErrorInterceptor} from './utils/ErrorInterceptor';
import {CreateAdminComponent} from './create-admin/create-admint.component';
import { QuillModule } from 'ngx-quill';
import { NgxQuillModule } from '@dimpu/ngx-quill';
import {AuthLayoutComponent} from './layouts/auth-layout';
import {SsocallbackComponent} from './sso-callback/ssocallback.component';
// import { MatInputModule } from '@angular/material/input/input-module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {RedirectGuard} from './RedirectGuard/RedirectGuard';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxQuillModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
      MatOptionModule,
    QuillModule.forRoot()

    
],
  providers: [
    AuthService,
    TokenStorage,
    RedirectGuard,
    // { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    CreateAdminComponent,
    SsocallbackComponent
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }

