import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { LandingComponent } from './demo/components/landing/landing.component';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [AppComponent, NotfoundComponent, LandingComponent],
    imports: [AppRoutingModule, CommonModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
