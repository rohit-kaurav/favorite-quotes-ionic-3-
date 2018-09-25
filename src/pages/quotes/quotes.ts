import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{
    
    constructor(private navParams: NavParams,
                private alertCtrl: AlertController,
                private quotesService: QuotesService){
    }

    quoteGroup: { category: string, quotes:Quote[], icon: string }

    ngOnInit(){
        this.quoteGroup = this.navParams.data;
    }

    addToFavorites(selectedQuote: Quote){
        let alert = this.alertCtrl.create({
            title: "Are you sure?",
            message: "Add this quote to your 'Favorites'?",
            buttons: [
                {
                    text: 'Yes,please!',
                    handler: () => {
                        this.quotesService.addToFavorite(selectedQuote);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        })
        alert.present();
    }

    isFavorite(quote: Quote){
        return this.quotesService.isQuoteFavorite(quote);
    }

    removeFromFavorites(quote: Quote){
        let alert = this.alertCtrl.create({
            title: "Are you sure?",
            message: "Remove this quote from your 'Favorites'?",
            buttons: [
                {
                    text: 'Delete',
                    handler: () => {
                        this.quotesService.removeQuoteFromFavorites(quote);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        })
        alert.present();
    }
}