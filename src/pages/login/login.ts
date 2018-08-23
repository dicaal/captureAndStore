import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from '../../providers/app/app';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: AppProvider) { }

  user: any = {
    email:"",
    password:""
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    console.log("login",this.user)
     this._app.login(this.user)
      .subscribe((response: any) => {
        window.sessionStorage.setItem('token', response.token);
        window.sessionStorage.setItem('userId', response.UserId);
        console.log("works",response);
        this.navCtrl.setRoot(HomePage);
      })
    
  }
}
