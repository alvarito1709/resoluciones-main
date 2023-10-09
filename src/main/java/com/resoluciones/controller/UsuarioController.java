package com.resoluciones.controller;


import com.resoluciones.entities.Resolucion;
import com.resoluciones.entities.Usuario;
import com.resoluciones.service.UsuarioServiceIMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("/admin/usuarios")
public class UsuarioController {

@Autowired
    private  UsuarioServiceIMP usuarioService; // Asumo que tienes un UsuarioService




    @GetMapping("")
    public String listarUsuarios(Model model, HttpSession session,Usuario usuarioNuevo) {
        List<Usuario> usuarios = usuarioService.obtenerTodosUsuarios();
        Usuario usuario = (Usuario) session.getAttribute("usuariosession");
        model.addAttribute("usuarioNuevo", usuarioNuevo);
        if (usuario != null) {
            model.addAttribute("usuario", usuario);
        }
        model.addAttribute("usuariosList", usuarios);

        return "usuarios"; // Nombre de la plantilla Thymeleaf
    }

    @GetMapping("/get")
    public ResponseEntity<Usuario> getResolucion(@RequestParam String id) {
        // Aquí obtén la resolución del servicio o base de datos utilizando el ID
        Usuario usuario = usuarioService.obtenerUsuarioPorId(id);

        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/eliminar/{id}")
    public String eliminarUsuario(@PathVariable String id) {
        usuarioService.eliminarUsuario(id);
        return "redirect:/admin/usuarios";
    }


    @PostMapping("/create")
    public String createUsuario(@ModelAttribute("usuario") Usuario usuario,
                                @RequestParam("file") MultipartFile file,
                                @RequestParam("password") String password,
                                RedirectAttributes redirectAttributes) {
        Usuario busqueda = usuarioService.obtenerUsuarioPorId(usuario.getId());
        usuario.setPassword(password);
        System.out.println("EL PASSWORD ES " + password);

        if (!file.isEmpty()) {
            try {
                String uploadsDir = "/home/educacionuser/Downloads/uploads/"; // Ruta donde se guardarán las imágenes
                String originalFilename = file.getOriginalFilename();
                String fileName = String.valueOf(new Date().getTime());
                String filePath = Paths.get(uploadsDir, fileName).toString();

                // Crear directorios si no existen
                Files.createDirectories(Paths.get(uploadsDir));

                Files.copy(file.getInputStream(), Paths.get(filePath));
                System.out.println("LA RUTA DE LA IMAGEN ES " + filePath);
                usuario.setImagen("/uploads/"+fileName); // Establecer el nombre del archivo en la entidad Usuario
            } catch (IOException e) {
                e.printStackTrace();
                System.out.println(e.getMessage());
            }
        } else if (busqueda != null) {
            usuario.setImagen(busqueda.getImagen());
        }

        usuarioService.crearUsuario(usuario);

        return "redirect:/admin/usuarios";
    }




}
