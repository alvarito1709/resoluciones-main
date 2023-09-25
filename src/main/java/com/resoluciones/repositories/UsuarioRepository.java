package com.resoluciones.repositories;


import com.resoluciones.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

    public Usuario findByUsername(String username);
    @Query("SELECT a FROM Usuario a WHERE a.username=:username")
    List<Usuario>buscarTodosLosQueTenganEsemail(@Param("username") String username);

}