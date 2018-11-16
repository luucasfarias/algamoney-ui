import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { ReleaseModule } from './release/release.module';
import { PeopleModule } from './people/people.module';
import { SharedModule } from './shared/shared.module';
import { CormoduleModule } from './cormodule/cormodule.module';
import { ReleaseService } from './release/release.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    ReleaseModule,
    PeopleModule,
    SharedModule,
    CormoduleModule
  ],
  providers: [ReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
