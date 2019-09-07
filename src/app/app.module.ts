import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MatSharedModsModule } from './mat-shared-mods/mat-shared-mods.module';
import { HeaderComponent } from './UI/header/header.component';
import { BodyComponent } from './UI/body/body.component';
import { FooterComponent } from './UI/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSharedModsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
