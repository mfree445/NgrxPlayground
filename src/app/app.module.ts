import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './shared/material.module';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';
import {HttpClientModule} from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { DummyApiEffects } from './effects/dummyApi.effects';
import { DummyApiPageComponent } from './dummy-api-page/dummy-api-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    LayoutComponent,
    CounterPageComponent,
    SecondaryPageComponent,
    DummyApiPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([DummyApiEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
