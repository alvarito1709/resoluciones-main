package com.resoluciones.entities;

import org.hibernate.annotations.GenericGenerator;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
public class Usuario{
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable = false)
    private Date fechaYHoraDeCreacion;

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaYHoraDeUltimaModificacion;
    private String nombre;
    private String apellido;
    private String documento;
    private String email;
    private String telefono;
    private String imagen;

    private String username;
    private String password;
    private Boolean activo;

 private String permisos;
    @PrePersist
    protected void onCreate() {
        fechaYHoraDeCreacion = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        fechaYHoraDeUltimaModificacion = new Date();
    }
    public Usuario() {
    }

    public String getPermisos() {
        return permisos;
    }

    public void setPermisos(String permisos) {
        this.permisos = permisos;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getFechaYHoraDeCreacion() {
        return fechaYHoraDeCreacion;
    }

    public void setFechaYHoraDeCreacion(Date fechaYHoraDeCreacion) {
        this.fechaYHoraDeCreacion = fechaYHoraDeCreacion;
    }

    public Date getFechaYHoraDeUltimaModificacion() {
        return fechaYHoraDeUltimaModificacion;
    }

    public void setFechaYHoraDeUltimaModificacion(Date fechaYHoraDeUltimaModificacion) {
        this.fechaYHoraDeUltimaModificacion = fechaYHoraDeUltimaModificacion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }




    @Override
    public String toString() {
        return "Usuario{" +
                "id='" + id + '\'' +
                ", fechaYHoraDeCreacion=" + fechaYHoraDeCreacion +
                ", fechaYHoraDeUltimaModificacion=" + fechaYHoraDeUltimaModificacion +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", documento='" + documento + '\'' +
                ", email='" + email + '\'' +
                ", telefono='" + telefono + '\'' +
                ", imagen='" + imagen + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", activo=" + activo +
                ", permisos=" + permisos +
                '}';
    }

}
