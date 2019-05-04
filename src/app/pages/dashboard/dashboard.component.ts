import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public produtosLista: any[];

  ngOnInit() {
  this.produtosLista = [
    {id: 1, tipo: 'Todos'},
    {id: 2, tipo: 'Produto 1'},
    {id: 3, tipo: 'Produto 2'},
    {id: 4, tipo: 'Produto 3'},
    {id: 5, tipo: 'Produto 4'},
    {id: 6, tipo: 'Produto 5'},
  ]

}


}
