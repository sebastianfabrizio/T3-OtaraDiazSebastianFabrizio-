import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {

  resultado="esperando data"
  mostrarM=false
  frmNota={
    nota1:null,
    nota2:null,
    nota3:null,
    nota4:null
  }

  calcularPromedio(){
    let n1 = Number(this.frmNota.nota1)
    let n2 = Number(this.frmNota.nota2)
    let n3 = Number(this.frmNota.nota3)
    let promedio= n1 * 0.2 +  n2 * 0.3 + n3 * 0.5
    this.resultado="Su promedio es "+ promedio.toFixed(2)
    this.mostrarM=true

  }

}
