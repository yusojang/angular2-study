import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { DatabindingComponent } from './databinding/databinding.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DatabindingComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([   //루트 경로 중심으로 경로 탐색
      {
      path : 'heroes',
      component : HeroesComponent
    },
    {
      path : 'dashboard',
      component : DashboardComponent
    },
    {
      path: '',
      redirectTo : '/dashboard',
      pathMatch : 'full'
    },
    {
      path: 'detail/:id',
      component : HeroDetailComponent
    }
    ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
