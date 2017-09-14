import { PhotoService } from './../photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  search: String = '';
  photos = [];
  err: String;
  constructor(private _httpService: PhotoService) { }

  ngOnInit() {
  }

  searchPhotos() {
    // this._httpService.getPhotos(this.search)
    // .then( photos => {this.photos = photos})
    // .catch( err => { this.err = err })
    // this.search = '';
  }

}
