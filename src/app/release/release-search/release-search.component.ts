import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release-search',
  templateUrl: './release-search.component.html',
  styleUrls: ['./release-search.component.css'],
})
export class ReleaseSearchComponent implements OnInit {

  releases = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2018, 5, 20),
      dataPagamento: new Date(2018, 6, 20), valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2018, 2, 10),
      dataPagamento: new Date(2018, 3, 20), valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2018, 3, 25),
      dataPagamento: new Date(2018, 4, 20), valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2018, 9, 1),
      dataPagamento: new Date(2018, 10, 20), valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2018, 5, 20),
      dataPagamento: new Date(2018, 6, 20), valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2018, 12, 10),
      dataPagamento: new Date(2019, 1, 10), valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2018, 5, 20),
      dataPagamento: new Date(2018, 6, 20), valor: 180, pessoa: 'Academia Top' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
