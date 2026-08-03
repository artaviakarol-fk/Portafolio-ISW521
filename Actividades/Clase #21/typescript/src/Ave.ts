export class Ave{
    color: String;
    especie: String;
    sonido: String;

    constructor(color: String, especie:String, sonido: String){
    this.color= color;
    this.especie = especie;
    this.sonido = sonido;
    }

    comer(aliemento: string): void{
        console.log(`el ave esta comiendo ${aliemento}`);

    }

}