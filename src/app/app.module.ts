import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage, GuardadosPage, MapaPage, TabsPage } from '../pages/index.paginas'

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//servicios
import { HistorialProvider } from '../providers/historial/historial';

//Mapas
import { AgmCoreModule } from '@agm/core';


import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage, GuardadosPage, MapaPage, TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnAV_KrmA4djBLPXQgX7qL7gzm0pZhh50'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, GuardadosPage, MapaPage, TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,    
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
