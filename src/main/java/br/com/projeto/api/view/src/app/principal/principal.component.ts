import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  
  
  //Variavel para visibilade dos botoes
  btnCadastro:boolean =true;

  //JSON de clientes
  clientes:Cliente[] = [];

  
constructor(private servico:ClienteService){

}

 //objeto do  tipo cliente
  cliente  = new Cliente();


  //Metodo de seleçao
  selecionar():void{

    this.servico.selecionar()
    .subscribe(retorno =>this.clientes =retorno);
  }

  //Metodo de inicializacao

  ngOnInit(){
    this.selecionar();

  }




}
