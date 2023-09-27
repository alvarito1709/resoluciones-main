package com.resoluciones.controller;


import com.resoluciones.entities.Resolucion;
import com.resoluciones.entities.Usuario;
import com.resoluciones.repositories.ResolucionSpecifications;
import com.resoluciones.service.ExcelGenerator;
import com.resoluciones.service.ResolucionService;
import com.resoluciones.service.UsuarioServiceIMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.springframework.core.io.ByteArrayResource;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
@Controller
@RequestMapping({"/admin","/admin/"})
public class AdminController {

    @Autowired
    private UsuarioServiceIMP usuarioServiceIMP;

    @Autowired
    private ResolucionService resolucionService;

    @GetMapping({ "/panel"})

    public String panelAdministrador(Model model, HttpSession session) {
        List<Usuario> usuarios = usuarioServiceIMP.obtenerTodosUsuarios();

        Usuario usuario = (Usuario) session.getAttribute("usuariosession");

        if (usuario != null) {
            model.addAttribute("usuario", usuario);
        }
        int menosUnMes = 0;
        int entreUnMesYSeisMeses = 0;
        int masSeisMeses = 0;
List<Resolucion> resoluciones=resolucionService.obtenerTodasResoluciones();
        for (Resolucion resolucion : resoluciones) {
           if (resolucion.getPlazoDeVigencia()!=null){
               Date plazoDeVigencia = resolucion.getPlazoDeVigencia();
               Date hoy = new Date();
               long diffInMillies = plazoDeVigencia.getTime() - hoy.getTime();
               long diffInDays = diffInMillies / (24 * 60 * 60 * 1000);

               if (diffInDays < 30) {
                   menosUnMes++;
               } else if (diffInDays >= 30 && diffInDays <= 180) {
                   entreUnMesYSeisMeses++;
               } else {
                   masSeisMeses++;
               }
           }
        }
        if (usuarios != null) {
            model.addAttribute("masSeisMeses", masSeisMeses);
            model.addAttribute("entreUnMesYSeisMeses", entreUnMesYSeisMeses);
            model.addAttribute("menosUnMes", menosUnMes);
            model.addAttribute("totalResol", resoluciones.size());
        }

        return "panel-administrador"; // Nombre de la plantilla Thymeleaf
    }

    @GetMapping({ "/graficas"})

    public String panelAdministradorGraficos(Model model, HttpSession session) {
        List<Usuario> usuarios = usuarioServiceIMP.obtenerTodosUsuarios();

        Usuario usuario = (Usuario) session.getAttribute("usuariosession");

        if (usuario != null) {
            model.addAttribute("usuario", usuario);
        }


        return "graficos"; // Nombre de la plantilla Thymeleaf
    }

    @GetMapping({ ""})

    public String panelAdministradorIndex(Model model, HttpSession session) {


        Usuario usuario = (Usuario) session.getAttribute("usuariosession");

        if (usuario != null) {

            //CREA UNA VARIABLE USUARIO CON LOS ARIBUTOS DE USUARIOSRESSION (tipo de acceso)
            model.addAttribute("usuario", usuario);
        }
model.addAttribute("tipo","");
        model.addAttribute("pagPrin", true);
        return "indexadmin"; // Nombre de la plantilla Thymeleaf
    }
    @GetMapping("/resolucion/numero")
    public String getResolucionNro(@RequestParam String resolucionNro,HttpSession session, Model model) {
        // Aquí obtén la resolución del servicio o base de datos utilizando el ID
        Resolucion resolucion = resolucionService.buscarPorResolucionAprobatoria(resolucionNro);
        Usuario usuario = (Usuario) session.getAttribute("usuariosession");

        if (usuario != null) {
            model.addAttribute("usuario", usuario);
        }
        if (resolucion!=null){
            model.addAttribute("tipo",resolucion.getTipoDeOferta());
            model.addAttribute("resolucion",resolucion);
        }
        model.addAttribute("pagPrin", true);
        return "indexadmin";
    }



    @GetMapping("/cargarreso")
    public ModelAndView cargarTabla(Model model) {
        List<Resolucion> resoluciones = resolucionService.obtenerTodasResoluciones();
        model.addAttribute("resoluciones", resoluciones);
        model.addAttribute("tipo", "EDUCACIÓN TECNICA PROFESIONAL");
        return new ModelAndView("tablas :: tablaPedidos");
    }

    @PostMapping("/cargarreso")
    public ModelAndView cargarTabla(@RequestBody Map<String, String> params, Model model) {
        String tipoDeGestion = params.get("tipoDeGestion");
        String tipoDeOferta = params.get("tipoDeOferta");
        String tipoDeTitulo = params.get("tipoDeTitulo");

        List<Resolucion> resoluciones = resolucionService.obtenerTodasResoluciones();
        model.addAttribute("resoluciones", resoluciones);
        model.addAttribute("tipo", tipoDeOferta);
        return new ModelAndView("tablas :: tablaPedidos");
    }
    @GetMapping("/resolucion")
    public ResponseEntity<Resolucion> getResolucion(@RequestParam String id) {
        // Aquí obtén la resolución del servicio o base de datos utilizando el ID
        Resolucion resolucion = resolucionService.obtenerResolucionPorId(id);

        if (resolucion != null) {
            return ResponseEntity.ok(resolucion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/downloadExcel")
    public ResponseEntity<ByteArrayResource> downloadExcel(@RequestParam String tipoDeOferta) throws IOException {
        System.out.println(tipoDeOferta);
        List<Resolucion> resoluciones = resolucionService.buscarPorTipoDeOferta(tipoDeOferta);

        byte[] excelBytes = ExcelGenerator.generateExcel(resoluciones,tipoDeOferta);

        ByteArrayResource resource = new ByteArrayResource(excelBytes);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=resoluciones.xlsx")
                .body(resource);
    }




}

