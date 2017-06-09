import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
// import { FacebookLoginPage } from '../facebook-login/facebook-login';
// import { GoogleLoginPage } from '../google-login/google-login';
import { ContactCardPage } from '../contact-card/contact-card';

@Component({
  selector: 'functionalities-page',
  templateUrl: 'functionalities.html'
})
export class FunctionalitiesPage {
  items: Array<{title: string, note?: string, component: any}>;
  flagIniciar:boolean=false;

  constructor(public nav: NavController) {
    this.items = [
      // { title: 'Facebook Integration', component: FacebookLoginPage },
      // { title: 'Google Integration', component: GoogleLoginPage },
      { title: 'Contact Card', component: ContactCardPage },
      { title: 'Maps', component: MapsPage },
    ];
  }

  itemTapped(event, item) {
    // if(!this.flagIniciar){
    //   this.nav.setRoot(item.component);
    //   this.flagIniciar=true;
    // }
    // else{
      this.nav.push(item.component);
    // }
    
    // if(item.title=='Maps'){
    //   item.component.reload();
    // }
  }

}
