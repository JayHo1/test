import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { MeetComponent } from './meet/meet.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HomeTrendingComponent } from './home/home-trending/home-trending.component';

/* Directives */
// import { CarouselDirective } from '../Directives/carousel.directive';

/* Library */
import { SwiperModule } from 'angular2-swiper-wrapper';
import { SwiperConfigInterface } from 'angular2-swiper-wrapper';

const SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    keyboardControl: true
};


/* Routes */
const appRoutes: Routes = [
    { path: 'discover', component: DiscoverComponent },
    { path: 'meet', component: MeetComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        DiscoverComponent,
        MeetComponent,
        NotFoundComponent,
        FooterComponent,
        HomeTrendingComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        SwiperModule.forRoot(SWIPER_CONFIG),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
