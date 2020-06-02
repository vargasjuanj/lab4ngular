//La relación entre la imagen y el instrumento se hace en el backend, para relacionarlos directamente en el front y evitar hacer cierto proceso en el back se debe transormar el archivo en bytes y a gregarlo a instrumento. Especificamente en la propiedad picBytes
export interface Imagen{
    id:number
    name:string
    picByte:string
    type:string
}