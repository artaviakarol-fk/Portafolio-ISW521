export class Estudiante{
    cedula:number;
    nombre: String;
    primer_Apellido: String;
    edad: number;

constructor(cedula:number, nombre: string, primer_Apellido: String,edad: number  ){
this.cedula = cedula 
this.nombre = nombre
this.primer_Apellido = primer_Apellido
this.edad = edad 

}

    matricular(): void{
        console.log(`La cedula: ${this.cedula} nombere: ${this.nombre} primer apellido: ${this.primer_Apellido} edad: ${this.edad}`);
    }
}




