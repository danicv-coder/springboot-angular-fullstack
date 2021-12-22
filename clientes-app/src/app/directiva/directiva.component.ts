import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso: string[] = ['Typescript', 'Java´se', 'php', 'JS'];
  habilitar: boolean = true;
  constructor() {}

  sethabilitar(): void {
    this.habilitar = this.habilitar == true ? false : true;
  }
}
