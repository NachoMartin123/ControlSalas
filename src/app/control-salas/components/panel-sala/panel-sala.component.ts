import { Component, Input, Output , EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Sala } from 'src/app/control-salas/service/model/sala.interface'
import { ControlSalasService } from 'src/app/control-salas/service/control-salas.service'

@Component({
  selector: 'app-panel-sala',
  templateUrl: './panel-sala.component.html',
  styleUrls: ['./panel-sala.component.scss']
})
export class PanelSalaComponent implements OnChanges{

  @Input() planta!: number;
  @Input() salas!: Sala[];

  @Output() addSalaEvent = new EventEmitter();
  @Output() eliminarSalaEvent = new EventEmitter<number>();
  @Output() guardarCambiosEvent = new EventEmitter<Sala>();
  @Output() buscarSalasEvent = new EventEmitter<Sala>();

  constructor(
    ) {

    }

    ngOnChanges(changes: SimpleChanges) {
      console.log("changes desde panel");
      console.log(changes);

      const cambiosSalas = changes['salas'];
      if(cambiosSalas){
        console.log("salas en panel tras cambios")
        console.log(this.salas)
      }

  
    }

    addSala(){
      this.addSalaEvent.emit();
    }

    eliminarSala(id: number){
      this.eliminarSalaEvent.emit(id);
    }

    guardarCambios(sala: Sala){
      this.guardarCambiosEvent.emit(sala)
    }



}
