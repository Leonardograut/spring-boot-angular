package br.com.projeto.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.model.Cliente;
import br.com.projeto.api.repository.Repositorio;

@RestController
public class Controler {
   
  @Autowired 
  private Repositorio repositorio;


  @PostMapping("/")
  public Cliente cadastrar(@RequestBody Cliente c){
    return repositorio.save(c);
  }

    @GetMapping("/")
    public String teste(){
        return "hello world";
    }

}
