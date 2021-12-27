import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  public create(): void {
    this.clienteService
      .create(this.cliente)
      .subscribe((respose) => this.router.navigate(['/clientes']));
  }
}
