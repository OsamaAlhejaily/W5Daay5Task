import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot([]), 
    AppComponent  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}