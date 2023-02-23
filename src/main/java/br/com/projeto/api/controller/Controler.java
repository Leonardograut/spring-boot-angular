package br.com.projeto.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.repository.Repositorio;

@RestController
public class Controler {
   
  @Autowired 
  private Repositorio repositorio;



    @GetMapping("/")
    public String teste(){
        return "hello world";
    }

}
