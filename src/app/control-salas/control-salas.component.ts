import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlSalasService } from 'src/app/control-salas/service/control-salas.service'
import { filtrosDTO } from 'src/app/control-salas/components/selector-planta/selector-planta.component'
import { Sala } from 'src/app/control-salas/service/model/sala.interface'

@Component({
  selector: 'app-control-salas',
  templateUrl: './control-salas.component.html',
  styleUrls: ['./control-salas.component.scss']
})
export class ControlSalasComponent  implements OnInit, OnChanges{

  public planta: number;
  public plantasTotales: number;
  public salas: Sala[]=[];
  public filtroCapMax: number = 0 ;
  public filtroOcupacion : number =0;

  constructor(
    private controlSalasService: ControlSalasService
  ) {
    this.planta=1; 
    this.plantasTotales = this.controlSalasService.getNumPlantas();
  }

  ngOnInit(){
    this.getSalas();
  }

  getSalas(){
    this.salas = this.controlSalasService.getSalasByPlanta(this.planta, this.filtroCapMax, this.filtroOcupacion);
    console.log("control - llamada getSalas")
    console.log(this.salas)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes desde control");
    console.log(changes);

    if(changes['planta'] || changes['salas']){
      this.getSalas();
       console.log(this.salas)
    }

  }

  cambiarPlanta(planta: number){
    console.log("cambiamos a planta "+planta)
    this.planta = planta;
    this.getSalas()

  }

  cambiarFiltros(filtros: filtrosDTO){
    console.log("llamada a control - cambiar filtros")
    this.filtroCapMax = filtros.filtroCapMax;
    this.filtroOcupacion = filtros.filtroOcupacion;
    this.getSalas();
  }
  

  addSala(){
    var newSala:Sala = {
      id: -1,
      capacidadMax: 100,
      ocupacion: 0
    }
    this.controlSalasService.newSala(this.planta, newSala);
    this.getSalas();
  }

  eliminarSala(id: number){
    this.controlSalasService.eliminarSala(this.planta, id);
    this.getSalas();
  }

  guardarCambios(sala: Sala){
    console.log("llamada a guardarCambios")
    console.log("cambios de planta actual")
    console.log(this.salas)
    this.controlSalasService.guardarCambiosPlanta(this.planta, sala)
    this.getSalas();
  }


}
