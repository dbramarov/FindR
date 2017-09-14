import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search: String = '';
  info;
  err;
  personFound = false;
  profiles;
  linkedIn;

  constructor(private _httpService: PhotoService) { }

  ngOnInit() {
  }

  searchEmail() {
    this.err = null;
    this.info = null;
    this._httpService.getPhotos(this.search)
    .then( searchinfo => {this.info = searchinfo})
    .catch( err => { this.err = err });
    this.addNewSearch(this.search);
    this.search = '';
  }

  findBio() {
     this.profiles = this.info.socialProfiles
      for (let i = 0; i < this.profiles.length; i++) {
        if (this.profiles[i].type === 'linkedin') {
          return this.profiles[i].bio;
        }
      }
      return 'Not Available';
  }

  addNewSearch(email) {
    this._httpService.addSearch(email);
  }
}
