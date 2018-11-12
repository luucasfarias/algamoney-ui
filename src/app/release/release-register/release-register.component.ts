import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release-register',
  templateUrl: './release-register.component.html',
  styleUrls: ['./release-register.component.css']
})
export class ReleaseRegisterComponent implements OnInit {

  option = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categories = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 },
  ];

  people = [
    { label: 'Lucas Farias', value: 1 },
    { label: 'Maria da Silva', value: 2 },
    { label: 'Joaquina Pereira', value: 3 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
