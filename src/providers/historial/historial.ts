import { Injectable } from '@angular/core';

import { ScanData } from '../../models/scan-data.model';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ModalController } from 'ionic-angular';
import { MapaPage } from '../../pages/index.paginas';

@Injectable()
export class HistorialProvider {

  private _historial: ScanData[] = [];

  constructor(private iab: InAppBrowser, private modalCtrl: ModalController) {}

  agregar_historial (texto: string)  {
    let data = new ScanData( texto );
    this._historial.unshift ( data );

    console.log ('historial',this._historial);

    this.abrir_scan ( 0 );
  }

  abrir_scan( index: number ) {
    let scanData = this._historial[index];
    console.log('scandata',scanData);

    switch (scanData.tipo) {
      case 'http':
        console.log('Es http');
        this.iab.create( scanData.info, "_system" );
        break;
      case 'mapa':
        console.log('Es mapa');
        this.modalCtrl.create( MapaPage, { coords: scanData.info} ).present();
        break;
      default:
        console.error('Tipo no soportado');
    }
  }

  cargar_historial() {
    return this._historial;
  }

}
