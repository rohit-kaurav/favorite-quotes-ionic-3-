import { SettingsService } from './../../services/settings';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';

@Component({
    selector: "page-favorites",
    templateUrl: "favorites.html"
})
export class FavoritesPage {
    quotes: Quote[] = [];

    constructor(private quotesService: QuotesService,
                private settingsService: SettingsService,
                private modalCtrl: ModalController){}

    ionViewWillEnter(){
        this.quotes = this.quotesService.getFavoriteQuotes();
    }

    viewQuote(quote: Quote){
        let modal = this.modalCtrl.create(QuotePage, quote,{
            enableBackdropDismiss: true,
            showBackdrop: true
        });
        modal.present();
        modal.onDidDismiss((remove: boolean) => {
            if(remove){
                this.removeFromFavorites(quote);
            }
        });
    }

    removeFromFavorites(quote: Quote){
        this.quotesService.removeQuoteFromFavorites(quote);
        const position = this.quotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.quotes.splice(position,1);
    }

    getBackground(){
        return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }
}