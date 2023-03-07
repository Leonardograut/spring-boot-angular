package br.com.projeto.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.model.Cliente;
import br.com.projeto.api.repository.Repositorio;

@RestController
@CrossOrigin(origins = "*")
public class Controler {
   
  @Autowired 
  private Repositorio repositorio;


  @PostMapping("/")
  public Cliente cadastrar(@RequestBody Cliente c){
    return repositorio.save(c);
  }

    @GetMapping("/")
    public Iterable<Cliente>selecionar(){
        return repositorio.findAll();
    }


    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente c ){
      return repositorio.save(c);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id ){
        repositorio.deleteById(id);
    }

}
