import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorisedComponent } from './error/unauthorised/unauthorised.component';
import { ErrorInterceptor } from './global/interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UnauthorisedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor ,multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
