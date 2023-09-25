package com.resoluciones.controller;

import com.resoluciones.entities.Resolucion;
import com.resoluciones.service.ResolucionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.tags.Param;

import java.util.List;

@Controller
@RequestMapping("/admin/resoluciones")
public class ResolucionController {
    @Autowired
    private final ResolucionService resolucionService;


    public ResolucionController(ResolucionService resolucionService) {
        this.resolucionService = resolucionService;
    }

    @GetMapping("/resoluciones")
    public String listarResoluciones(Model model) {
        List<Resolucion> resoluciones = resolucionService.obtenerTodasResoluciones();
        model.addAttribute("resoluciones", resoluciones);
        return "listar_resoluciones"; // Nombre de la plantilla Thymeleaf
    }

    @GetMapping("/resoluciones/{id}")
    public String verResolucion(@PathVariable String id, Model model) {
        Resolucion resolucion = resolucionService.obtenerResolucionPorId(id);
        model.addAttribute("resolucion", resolucion);
        return "ver_resolucion"; // Nombre de la plantilla Thymeleaf para ver una resolución individual
    }

    @GetMapping("/resoluciones/nueva")
    public String mostrarFormularioNuevaResolucion(Model model) {
        Resolucion resolucion = new Resolucion();
        model.addAttribute("resolucion", resolucion);
        return "formulario_resolucion"; // Nombre de la plantilla Thymeleaf para el formulario de nueva resolución
    }

    @PostMapping("/resoluciones/nueva")
    public String guardarResolucion(@ModelAttribute Resolucion resolucion) {
        resolucionService.crearResolucion(resolucion);
        return "redirect:/resoluciones";
    }

    @GetMapping("/resoluciones/{id}/editar")
    public String mostrarFormularioEditarResolucion(@PathVariable String id, Model model) {
        Resolucion resolucion = resolucionService.obtenerResolucionPorId(id);
        model.addAttribute("resolucion", resolucion);
        return "formulario_resolucion"; // Nombre de la plantilla Thymeleaf para el formulario de edición
    }

    @PostMapping("/resoluciones/{id}/editar")
    public String actualizarResolucion(@PathVariable String id, @ModelAttribute Resolucion resolucion) {
        resolucionService.actualizarResolucion(id, resolucion);
        return "redirect:/resoluciones";
    }




    @PostMapping("/crearResolucionAR")
    public ResponseEntity<String> crearResolucion(@RequestBody Resolucion resolucion) {
        try {
            resolucionService.crearResolucion(resolucion);

            return ResponseEntity.ok().body("{\"message\": \"Resolución creada con éxito\"}");

        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCause());
            return new ResponseEntity<>("Error al crear la resolución", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/crearResolucionCPL")
    public ResponseEntity<String> crearResolucionCPL(@RequestBody Resolucion resolucion) {
        try {

            System.out.println(resolucion.getUrl());
            resolucionService.crearResolucion(resolucion);

            return ResponseEntity.ok().body("{\"message\": \"Resolución creada con éxito\"}");

        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCause());
            return new ResponseEntity<>("Error al crear la resolución", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/crearResolucionSH")
    public ResponseEntity<String> crearResolucionSH(@RequestBody Resolucion resolucion) {
        try {

            System.out.println(resolucion.getUrl());
            resolucionService.crearResolucion(resolucion);

            return ResponseEntity.ok().body("{\"message\": \"Resolución creada con éxito\"}");

        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCause());
            return new ResponseEntity<>("Error al crear la resolución", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/crearResolucionETP")
    public ResponseEntity<String> crearResolucionETP(@RequestBody Resolucion resolucion) {
        try {

            System.out.println(resolucion.getUrl());
            resolucionService.crearResolucion(resolucion);

            return ResponseEntity.ok().body("{\"message\": \"Resolución creada con éxito\"}");

        } catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println(e.getCause());
            return new ResponseEntity<>("Error al crear la resolución", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> eliminarResolucion(@RequestParam String id) {
        try {
            resolucionService.eliminarResolucion(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al eliminar la resolución");
        }
    }
}

