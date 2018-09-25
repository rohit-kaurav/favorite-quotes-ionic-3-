import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';

@Component({
    templateUrl: "tabs.html"
})
export class TabsPage {
    tab1Page = FavoritesPage;
    tab2Page = LibraryPage;
}