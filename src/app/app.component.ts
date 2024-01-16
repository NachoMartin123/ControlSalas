import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';
//import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appSalasNacho';

  constructor(
    //private translate: TranslateService,
     private router: Router
  ) {
    /*if (navigator.userAgent.indexOf('MSIE') > -1 || navigator.userAgent.indexOf('Trident') > -1) {
      if (window.location.href.indexOf('app/unsupportedBrowser') === -1) {
        this.router.navigate(['unsupportedBrowser']);
      }
    }
    this.translate.addLangs(['es', 'en']); //set idiomas
    if (this.cookieService.get('lang')) { //cookie idioma
      this.translate.setDefaultLang(this.cookieService.get('lang'));
      this.translate.use(this.cookieService.get('lang'));
    } else {
      this.translate.setDefaultLang('es');
      this.translate.use('es');
    }*/

   /* this.store.pipe(select(state => state)).subscribe(state => {
      if (state.pdf !== undefined) { this.fullscreenHide = state.pdf.isFullScreen; }
    });

    document.body.addEventListener('webkitPfullscreenchange', (event) => {
      console.log('FullScreen is ' + document.fullscreenElement);
    });*/
  }
}
