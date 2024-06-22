import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
mostrarM=false
resultado="esperando data"
  frmMonto={
    hora:null,
    minuto:null
  }

  calcularMonto(){
    let costoH = Number(this.frmMonto.hora) * 1500
    let min = Number(this.frmMonto.minuto)
    let costoM = (1500 * min) / 60
    let total = costoH+costoM
this.resultado= "Usted pagará " + total
this.mostrarM=true
  }
}
