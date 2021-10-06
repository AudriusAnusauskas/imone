import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApieImoneComponent } from './apie-imone/apie-imone.component';
import { TeikiamosPaslaugosComponent } from './teikiamos-paslaugos/teikiamos-paslaugos.component';
import { MusuDarbaiComponent } from './musu-darbai/musu-darbai.component';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:"", component:MainComponent},
  { path:"apie-imone", component:ApieImoneComponent},
  { path:"teikiamos-paslaugos", component:TeikiamosPaslaugosComponent},
  { path:"musu-darbai", component:MusuDarbaiComponent},
  { path:"kontaktai", component:KontaktaiComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ApieImoneComponent,
    TeikiamosPaslaugosComponent,
    MusuDarbaiComponent,
    KontaktaiComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
