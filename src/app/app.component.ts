import { style } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'calculator-app-main';
  public tema = 'tema-1';
  public mudarTema() {
    if (this.tema === 'tema-1') {
      this.tema = 'tema-2';
    } else if (this.tema === 'tema-2') {
      this.tema = 'tema-3';
    } else {
      this.tema = 'tema-1';
    }
  }
}
