import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    public languagePreference: string = StorageService.getItem('prefered-language') || 'en';

    constructor(public translate: TranslateService) {
        translate.addLangs(['es', 'eu', 'en']);

        translate.setDefaultLang(StorageService.getItem('prefered-language') || 'es');

        translate.use(StorageService.getItem('prefered-language') || 'es');

        StorageService.setItem(
            'prefered-language',
            StorageService.getItem('prefered-language') || this.languagePreference,
        );
    }

    changeLanguage(language: string) {
        this.languagePreference = language;

        this.translate.use(language);

        StorageService.setItem('prefered-language', language);
        console.log(localStorage.getItem("prefered-language"));
    }
}
