import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { LandingComponent } from './landing/landing.component';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from './layout/service/app.layout.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent, NotfoundComponent, LandingComponent],
    imports: [AppRoutingModule, CommonModule, BrowserModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        LayoutService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
