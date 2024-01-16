//import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Sala } from './model/sala.interface';
import { Planta } from './model/planta.interface';


@Injectable({
  providedIn: 'root',
})
export class ControlSalasService {
  private plantas:Planta[]=[];
  private maxId:number=8;

  constructor(
    //private translate: TranslateService
    ) { 
      //mock datos
      var planta1:Planta = {
        "piso": 1,
		    "salas": []
      }
      var planta2:Planta = {
        "piso": 2,
		    "salas": []
      }
      for(var i=1; i<9;i++){
        var salaAux = {
          "id":i,
          "capacidadMax": 100,
          "ocupacion": 0,
        }
        if(i<5){
          planta1.salas.push(salaAux)
        }else
          planta2.salas.push(salaAux)
      }
      this.plantas.push(planta1)
      this.plantas.push(planta2)
    }


  public getSalasByPlanta(planta: number, filtroCapMax: number, filtroOcupacion:number): Sala[] {
    for(var i=0; i<this.plantas.length;i++){
      if(this.plantas[i].piso===planta){
        var misSalas: Sala[] = this.plantas[i].salas;
        if(filtroCapMax)
          misSalas = misSalas.filter((salaAux) => salaAux.capacidadMax >= +filtroCapMax)
        if(filtroOcupacion)
          misSalas = misSalas.filter((salaAux) => salaAux.ocupacion >= +filtroOcupacion)
        return misSalas;
      }
    }
    return [];
  }


  public getMaxId():number{
    return this.maxId;
  }

  public incrementMaxId(){
    this.maxId++;
  }

  public guardarCambiosPlanta(planta:number, salaCambiada: Sala){
    for(var i=0; i<this.plantas.length;i++){
      if(this.plantas[i].piso===planta){
        for(var j=0; j<this.plantas[i].salas.length;j++){
          if(this.plantas[i].salas[j].id===salaCambiada.id){
            this.plantas[i].salas[j] = salaCambiada;
          }
        }
      }
        
    }
    console.log("plantas tras cambios")
    console.log(this.plantas)
  }

  public getNumPlantas():number{
    return this.plantas.length;
  }

  public newSala(planta:number, newSala: Sala){
    for(var i=0; i<this.plantas.length;i++){
      if(this.plantas[i].piso===planta){
        newSala.id = this.getMaxId()+1;
        this.plantas[i].salas.push(newSala);
        this.incrementMaxId()
      }
    }
  }

  public eliminarSala(planta:number, id:number){

    for(var i=0; i<this.plantas.length;i++){
      if(this.plantas[i].piso===planta){
        for(var j=0; j<this.plantas[i].salas.length;j++){
          if(this.plantas[i].salas[j].id === id){
            this.plantas[i].salas.splice(j, 1);
          }
        }
      }
    }
  }



}
