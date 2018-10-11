import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';
import { GithubViewComponent } from './github-view/github-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }