package com.resoluciones.controller;

import com.resoluciones.entities.Resolucion;
import com.resoluciones.entities.Usuario;
import com.resoluciones.repositories.ResolucionSpecifications;
import com.resoluciones.service.ResolucionService;
import com.resoluciones.service.UsuarioServiceIMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/")
public class PublicController {
    @Autowired
    private ResolucionService resolucionService;
    @Autowired
    private UsuarioServiceIMP usuarioServiceIMP;
    @GetMapping("")
    public String index(Model model, HttpSession session){
        Usuario usuario = (Usuario) session.getAttribute("usuariosession");
        if (usuario!=null) {

        model.addAttribute("usuario",usuario);
        }
        model.addAttribute("tipo","EDUCACIÓN TECNICA PROFESIONAL");
       // model.addAttribute("tipo","SOCIO HUMANISTICA");
       // model.addAttribute("tipo","ARTISTICA ESPECIFICA");
       // model.addAttribute("tipo","CAPACITACIÓN LABORAL");
        List<Resolucion> resoluciones=resolucionService.obtenerTodasResoluciones();
        if (resoluciones.size()==0){
//            resoluciones=resolucionService.generarListaDeResoluciones();
//            resolucionService.crearTodasResolucion(resoluciones);
        }
        return "plantilla";
    }
   @GetMapping("/iniciar")
    public String inicializarProyecto(){

     Usuario usuario=usuarioServiceIMP.crearPrimerAdministrador();
     if (usuario!=null){
         usuarioServiceIMP.crearUsuario(usuario);
     }
       return "redirect:/admin";
   }
    @PostMapping("/filtro-resoluciones")
    public ModelAndView getResoluciones(Model model,
            @RequestParam(value = "tipoDeOferta", required = false) String tipoDeOferta,
            @RequestParam(value = "tipoDeGestion", required = false) String tipoDeGestion,
            @RequestParam(value = "tipoDeTitulos", required = false) String tipoDeTitulos,
            @RequestParam(value = "tipoDeNomina", required = false) String tipoDeNomina,
            @RequestParam(value = "area", required = false) String area,
            @RequestParam(value = "nombreDeTitulo", required = false) String nombreDeTitulo,
            @RequestParam(value = "institucionDondeSeDicta", required = false) String institucionDondeSeDicta,
                                        @RequestParam(value = "cnofDondeSeDicta", required = false) String cnofDondeSeDicta,
            @RequestParam(value = "id", required = false) String id
            ) {
        ResolucionSpecifications resolucionSpecifications=new ResolucionSpecifications( tipoDeGestion,  tipoDeOferta,  tipoDeTitulos,  tipoDeNomina,  area,  nombreDeTitulo,  institucionDondeSeDicta,cnofDondeSeDicta,  id);
        List<Resolucion> resoluciones = resolucionService.buscarResolucionesConFiltros(resolucionSpecifications);
        model.addAttribute("resoluciones", resoluciones);
        model.addAttribute("tipo",tipoDeOferta);
        return new ModelAndView("tablas :: tablaPedidos");
    }

}
