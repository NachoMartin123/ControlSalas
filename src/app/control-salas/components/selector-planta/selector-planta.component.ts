import { Component,  Input , Output, EventEmitter, OnInit} from '@angular/core';

export interface filtrosDTO {
  filtroCapMax: number;
  filtroOcupacion:number;
}

@Component({
  selector: 'app-selector-planta',
  templateUrl: './selector-planta.component.html',
  styleUrls: ['./selector-planta.component.scss']
})
export class SelectorPlantaComponent implements OnInit{

  @Input() planta!: number;
  @Input() plantasTotales!: number;
  
  @Output() cambiarPlataEvent = new EventEmitter<number>();
  @Output() cambiarFiltrosEvent = new EventEmitter<filtrosDTO>();

  public filtroCapMax!:number;
  public filtroOcupacion!:number;


  public plantas!: number[];//array con los números de las plantas para iterar

  constructor(
    //private controlSalasService: ControlSalasService,
    //private translate: TranslateService,
  ) {
    
    
  }

  ngOnInit(): void {
    this.plantas = Array.from({length: this.plantasTotales}, (_, i) => i + 1)
  }


  cambiarPlanta(nuevaPlanta:number){
    this.cambiarPlataEvent.emit(+nuevaPlanta);
  }

  cambiarFiltros(){
    console.log("selector planta - cambairFiltros")
    this.cambiarFiltrosEvent.emit({
      filtroCapMax:this.filtroCapMax,
      filtroOcupacion:this.filtroOcupacion
    });

  }


}
