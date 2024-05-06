import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    constructor(public layoutService: LayoutService, public router: Router, private _sanitizer: DomSanitizer) { }

    getVideoIframe(url) {
        var video, results;
     
        if (url === null) {
            return '';
        }
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];
     
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
    }
    
    
}
