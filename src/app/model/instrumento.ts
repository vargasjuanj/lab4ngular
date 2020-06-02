import { Imagen } from './imagen';

export interface Instrumento{
    id: number
    instrumento: string
    marca: string
    modelo: string
    precio: number
    costoEnvio: string
    cantidadVendida: number
    descripcion: string
    nombreImagen:string
    imagen:Imagen
}