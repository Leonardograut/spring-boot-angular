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


//Variavel para visibilade das  tabelas

tabela:boolean = true;  

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


//Metodo de cadastro

cadastrar():void{
  this.servico.cadastrar(this.cliente)
  .subscribe(retorno =>{
    
    
    //Cadastrar  o cliente no vetor
    this.clientes .push(retorno);


    //Limpar  formulario

    this.cliente = new Cliente();


    //Mensagem

    alert('Cliente  cadastrado com sucesso')

  
  
  })
}


//metodo para selecionar  um cliente  especifico
selecionarCliente(posicao:number):void{

  //selecionar cliente no vetor
  this.cliente = this.clientes[posicao];

  //visibilidade dos botoes
  this.btnCadastro = false;


  //visibilidade da tabela
  this.tabela= false; 
}


//Metodo para editar clientes
editar():void{

  this.servico.editar(this.cliente)
  .subscribe(retorno =>{

   //Obter posiçao do vetor onde esta o cliente
   let posicao = this.clientes.findIndex(obj =>{

return obj.codigo == retorno.codigo;

   });

   //Alterar os dados do cliente no vetor
     this.clientes[posicao]=retorno;


     //limpar formulario
     this.cliente = new Cliente();

     //visibildade dos botoes 
     this.tabela = true;

     //mensagem
     alert ('Cliente alterado com sucesso')
   })


}


  //Metodo de inicializacao

  ngOnInit(){
    this.selecionar();

  }





}
