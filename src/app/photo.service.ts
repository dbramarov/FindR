import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class PhotoService {
  searches = [];

  constructor(private _http: Http) { };

  getPhotos(email) {
  	return this._http.get('https://api.fullcontact.com/v2/person.json?email=' + email + '&apiKey=3b5f5b40c27640d3').map(data=>data.json()).toPromise()
  }

  addSearch(email) {
    this.searches.push(email);
  }

  getSearch() {
    const lastTen = this.searches.slice(-10).reverse();
    return lastTen;
  }
}
