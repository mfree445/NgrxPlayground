import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { DummyApiPageComponent } from './dummy-api-page/dummy-api-page.component';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic-counter', pathMatch: 'full' },
  {
    path: 'basic-counter',
    component: CounterPageComponent,
  },
  {
    path: 'secondary-page',
    component: SecondaryPageComponent,
  },
  {
    path: 'dummy-api-page',
    component: DummyApiPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
