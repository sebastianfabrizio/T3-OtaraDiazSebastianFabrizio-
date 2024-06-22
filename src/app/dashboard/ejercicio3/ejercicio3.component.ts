import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule, MaterialModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  resultado = "Esperando data";
  mostrarM = false;
  frmMonto = {
    cantidad: null,
    precio: null
  };

  calcularMonto() {
    let can = Number(this.frmMonto.cantidad);
    let pre = Number(this.frmMonto.precio);
    var total;

    if (can > 20) {
      total = can * pre * 0.9;
    } else if (can <= 20 && can > 10) {
      total = can * pre * 0.95;
    } else {
      total = can * pre;
    }

    this.resultado = "Usted pagará " + total.toFixed(2); 
    this.mostrarM = true;
  }

}
