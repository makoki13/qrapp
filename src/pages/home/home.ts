import { Component } from '@angular/core';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Componentes
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {

  }

  scan() {
    console.log ("Realizando scan...");

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
         this.mostrar_error( 'Error: '+ err );
     });
  }

  mostrar_error( mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
