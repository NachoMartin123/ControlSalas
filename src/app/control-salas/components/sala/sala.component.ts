import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

import { Sala } from 'src/app/control-salas/service/model/sala.interface'

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent  implements OnChanges{

  @Input() planta!: number;
  @Input() capacidadMax!: number;
  @Input() ocupacion!: number;
  @Input() id!: number;


  @Output() eliminarSalaEvent = new EventEmitter<number>();
  @Output() guardarCambiosEvent = new EventEmitter<Sala>();

  constructor(
  ) {
   
  }

  ngOnChanges() {
  }

  eliminarSala(){
    this.eliminarSalaEvent.emit(this.id);
  }

  guardarCambios(){
      this.guardarCambiosEvent.emit({
        capacidadMax: this.capacidadMax,
        ocupacion: this.ocupacion,
        id: this.id
      });
  }

  checkCapMax(){
    if(!this.capacidadMax || this.capacidadMax <0 ){
      this.capacidadMax = 0;
    } if(!this.capacidadMax || this.capacidadMax > 100){
      this.capacidadMax = 100;
    }
  }

  checkOcu(){
    if(!this.ocupacion || this.ocupacion <0){
      this.ocupacion = 0;
    } else if(!this.ocupacion || this.ocupacion >100){
      this.ocupacion = 100;
    }
  }

}
