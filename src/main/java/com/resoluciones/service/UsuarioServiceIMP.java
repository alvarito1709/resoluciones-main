package com.resoluciones.service;

import com.resoluciones.entities.Usuario;
import com.resoluciones.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service("userDetailsService")

public class UsuarioServiceIMP implements UserDetailsService {
@Autowired
    private  UsuarioRepository usuarioRepository;
    @Autowired
    private  PasswordEncoder passwordEncoder;




    @Transactional
    public Usuario crearUsuario(Usuario usuario) {

        if (usuario.getNombre() != null) {
            usuario.setNombre(usuario.getNombre().toUpperCase());
        }

        if (usuario.getApellido() != null) {
            usuario.setApellido(usuario.getApellido().toUpperCase());
        }

        if (usuario.getPassword() != null) {
            usuario.setPassword(passwordEncoder.encode(usuario.getPassword()).trim());
        }

        if (usuario.getEmail() != null) {
            usuario.setEmail(usuario.getEmail().trim().toLowerCase());
usuario.setUsername(usuario.getEmail());
        }



        return usuarioRepository.save(usuario);
    }


    @Transactional(readOnly = true)
    public Usuario obtenerUsuarioPorId(String id) {
        Usuario usuario=usuarioRepository.findById(id).orElse(null);

        return usuario;
    }

    @Transactional(readOnly = true)
    public List<Usuario> obtenerTodosUsuarios() {
        return usuarioRepository.findAll();
    }

    @Transactional
    public Usuario actualizarUsuario(String id, Usuario usuario) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);
        if (usuarioExistente.isPresent()) {
            Usuario usuarioActualizado = usuarioExistente.get();
            usuarioActualizado.setNombre(usuario.getNombre());
            usuarioActualizado.setApellido(usuario.getApellido());
            // Actualiza otros atributos según sea necesario
            return usuarioRepository.save(usuarioActualizado);
        } else {
            throw new IllegalArgumentException("Usuario no encontrado con ID: " + id);
        }
    }
    @Transactional
    public Usuario deshabilitarUsuario(String id, Usuario usuario) {
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);
        if (usuarioExistente.isPresent()) {
            Usuario usuarioActualizado = usuarioExistente.get();
            usuarioActualizado.setActivo(false);
            return usuarioRepository.save(usuarioActualizado);
        } else {
            throw new IllegalArgumentException("Usuario no encontrado con ID: " + id);
        }
    }

    @Transactional
    public void eliminarUsuario(String id) {
        usuarioRepository.deleteById(id);
    }
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByUsername(username);
        if (usuario == null) {
            throw new UsernameNotFoundException(username);
        }
        var role = new ArrayList<GrantedAuthority>();
        role.add(new SimpleGrantedAuthority(usuario.getPermisos()));
        ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpSession session = attr.getRequest().getSession(true);
        session.setAttribute("usuariosession", usuario);
        return new User(usuario.getUsername(), usuario.getPassword(), role);
    }

    public Usuario crearPrimerAdministrador(){
        List<Usuario>usuarios=obtenerTodosUsuarios();
        Usuario usuario=null;
        if (usuarios.size()==0){

            usuario=new Usuario();
            usuario.setNombre("administrador");
            usuario.setActivo(true);
            usuario.setApellido("principal");
            usuario.setPassword("sistemas");
            usuario.setDocumento("00000000");
            usuario.setEmail("superadmin@bue.edu.ar");
            usuario.setPermisos("ROLE_ADMIN");
            usuario.setTelefono("4444444444");
            usuario.setUsername(usuario.getEmail());
            usuario.setImagen("/img/admin.webp");


        }
        return usuario;

    }

}
