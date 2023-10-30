import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {
  listTarjetas: any[] = [
    {titulo: "Juan Perez", numTarjeta: "12344556", fechaExpiracion: "11/30", cvv: "123" },
    {titulo: "Pepe Argento", numTarjeta: "456321", fechaExpiracion: "7/35", cvv: "4456" },

  ];

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: [''],
      numTarjeta: [''],
      fechaExpericion:  [''],
      cvv: ['']
    })
  };

  agregar(){
    console.log(this.form);
    const tarjeta: any = {
      titular: this.form.get("titular")?.value
    }
  }

}
