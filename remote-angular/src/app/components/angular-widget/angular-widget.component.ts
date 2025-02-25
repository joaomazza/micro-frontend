import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-widget',
  template: `<div style="padding: 20px; background-color: lightblue;">
               <h3>Componente Angular Exposto</h3>
               <button (click)="showAlert()">Clique Aqui</button>
             </div>`,
})
export class AngularWidgetComponent {
  showAlert() {
    alert("Micro Frontend Angular funcionando!");
  }
}