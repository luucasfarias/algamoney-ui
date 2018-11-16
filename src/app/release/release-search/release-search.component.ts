import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../release.service';

@Component({
  selector: 'app-release-search',
  templateUrl: './release-search.component.html',
  styleUrls: ['./release-search.component.css'],
})
export class ReleaseSearchComponent implements OnInit {

  releases = [];

  constructor(private releaseService: ReleaseService) { }

  ngOnInit() {
    this.getRealease();
  }

  getRealease() {
    this.releaseService.get().then(response => this.releases = response);
  }

}
