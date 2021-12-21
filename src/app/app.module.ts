import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { RmService } from './services/rm-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CleanStringPipe } from './utils/clean-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CleanStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [RmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
