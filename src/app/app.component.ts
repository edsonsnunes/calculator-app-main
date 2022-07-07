import { style } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  valor?: any;

  title = 'calculator-app-main';
  public tema: string = 'tema-1';
  public mudarTema() {
    if (this.tema === 'tema-1') {
      this.tema = 'tema-2';
    } else if (this.tema === 'tema-2') {
      this.tema = 'tema-3';
    } else {
      this.tema = 'tema-1';
    }
  }
  public add(num: any) {
    let newNumber = `${num}`;
    if (this.valor) {
      newNumber = `${this.valor}${num}`;
    }
    this.valor = parseInt(newNumber);
    this.valor = newNumber;
  }
  public back(num: any) {
    let back = this.valor.substring(0, this.valor.length - 1);
    this.valor = back;
  }
  public resetar(nada: string) {
    this.valor = nada;
  }
  public igual() {
    let resultado = eval(this.valor);
    this.valor = resultado.toFixed(2);
  }
}
