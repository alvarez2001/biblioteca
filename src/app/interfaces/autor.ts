export interface Autor{
    nombre:string;
    apellido:string;
    anterior:string;
    posterior:string;
    id?:number;
}

export interface autores {
    autores:Array<Autor>;
}
