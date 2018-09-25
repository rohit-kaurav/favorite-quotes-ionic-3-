import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-quote',
    templateUrl: 'quote.html'
})
export class QuotePage {
    quote: Quote;

    constructor(private viewCtrl: ViewController,
                private navParams: NavParams){}

    ionViewWillEnter(){
        this.quote = this.navParams.data;
    }

    closeModal(remove = false){
        this.viewCtrl.dismiss(remove);
    }
}