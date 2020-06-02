import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Instrumento } from 'src/app/model/instrumento';
import { InstrumentoService } from 'src/app/services/instrumento.service.';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit  {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  option:boolean=false;
  error:boolean=false; //Si hay algun error de cualquier tipo da una alerta, el formulario no está completamente validado.

  idAux:number=0;
  tieneImagen:boolean=false;  //Para no obligar a cambiar la imagen, cuando ya la tiene
  instrumento:Instrumento={
    id: null,
    instrumento:'',
    marca: '',
    modelo: '',
    precio: null,
    costoEnvio: '',
    cantidadVendida: null,
    descripcion: '',
    nombreImagen:'',
    
      imagen:{
        id:null,
        name:'',
        picByte:'',
        type:''
      }
      
  }
  uploadImageData:FormData
  constructor(private servicio: InstrumentoService, private router: Router, private ruta: ActivatedRoute) {
  
  }
 
  ngOnInit(): void {
    this.load()
  }

  load() {
    this.ruta.params.subscribe(params => {
      this.idAux= params['id'];
      if(this.idAux!=0){
        this.getOne(this.idAux)
        this.tieneImagen=true;
      }  
    },
    err=>console.log("Error al buscar el instrumento "+err)
    )
  }
  
getOne(id:number){
  this.servicio.getOne(id).subscribe(data=>{
this.instrumento=data;
 console.log(data);
},
  err=>console.log('Error al cargar el instrumento'+err)
  ) 
}


   submit() {
     this.save()
    
    }

    public onFileChanged(event) {


      if(this.tieneImagen==false){

  //Select File
  this.selectedFile = event.target.files[0];
  // console.log(this.selectedFile);
   this.uploadImageData = new FormData();
   const nombreUnico=this.selectedFile.name+Math.random().toString(36).substring(2);  //Combina el nombre de la imagen con una cadena aleatoria para tratar de que sea unico el nombre de imagen
   this.uploadImageData.append('imageFile', this.selectedFile, nombreUnico);

      }
    
    }
  
//Se puede refactorizar separandolos en distintos metodos
save(){ //aca tendria que usar asyn y await y promesas, pero uso observables, primero subo la img y despues el instrumento con el nombbre de la img
  
  if(this.tieneImagen==false){

    this.servicio.upload(this.uploadImageData).subscribe(response => {
      console.log("Response upload imagen")
       console.log(response); 
       const body=response.body;
       this.instrumento.nombreImagen=body.name; 
   console.log('nombre unico '+this.instrumento.nombreImagen);
   if(this.option==true){
     this.instrumento.costoEnvio='G';
   }
       this.servicio.post(this.instrumento).subscribe(data=>{
         console.log("Response post Instrumento");
         console.log(data);
   
       }, err=>this.error=true);
   /*
       if (response.status === 200) {
         console.log('Image uploaded successfully');
       } else {
        this.error=true;
    console.log('Image not uploaded successfully');
       }
       */
      console.log('Image uploaded successfully');
      //this.router.navigate(['/tabla']); la vista deberia mostrar el registro añadido, con backend reactivos y eventsource en el front se actualiza automaticamente, sin tener que recargar la pagina
      this.router.navigate(['/home']);
      //this.router.navigate(['instrumentoDetalle/'+this.instrumento.id]); //Por alguna razon no me carga la imagen al crearlo, por eso lo llevo al home
     }, 
     err=>{
       this.error=true;
       console.log(err)

     }
     );  
   
  }else{
   
    this.servicio.post(this.instrumento).subscribe(data=>{
      console.log("Response post Instrumento");
      console.log(data);
      this.router.navigate(['/home']);
    }, err=>this.error=true);
  }
  

}

  /*
    getImage() {
      this.servicio.getImage(this.imageName).subscribe(
        res => {                              
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log("Response getImage")
          console.log(res);
        }
      );
        
    }
    */
}