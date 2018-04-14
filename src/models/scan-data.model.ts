export class ScanData {
    info: string;
    tipo: string;

    constructor ( texto:string ) {

        console.log('constructor data-model',texto);

        this.tipo = "no definido";
        this.info = texto;

        if (texto.startsWith('http')) {
            this.tipo = 'http';
        } else if (texto.startsWith('geo')) {
            this.tipo = 'mapa';
        }       
    }
}