import { Component, ViewChild } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(MapComponent, {static: true}) mapComponent: MapComponent;

  constructor() {}

  testMarker(): void {
    let center = this.mapComponent.map.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());
  }

}
