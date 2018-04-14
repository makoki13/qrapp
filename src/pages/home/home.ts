import { Component } from '@angular/core';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Componentes
import { ToastController, Platform } from 'ionic-angular';

//Servicios
import { HistorialProvider} from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController, private platform: Platform, private _historialProvider: HistorialProvider) {

  }

  scan() {
    console.log ("Realizando scan...");

    if (!this.platform.is('cordova')) {
      //this._historialProvider.agregar_historial('http://dulcesol.es');
      this._historialProvider.agregar_historial('geo:38.86,0');
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.mostrar_mensaje (barcodeData.text + " " + barcodeData.format + " " + barcodeData.cancelled);

      if ( (barcodeData.cancelled === false) && (barcodeData.text !== null) ) {
        this._historialProvider.agregar_historial(barcodeData.text);
      }

     }).catch(err => {
         console.log('Error', err);
         this.mostrar_mensaje( 'Error: '+ err );
     });
  }

  mostrar_mensaje( mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
