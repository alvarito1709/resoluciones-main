package com.resoluciones.entities;


import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Column;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Resolucion implements Serializable {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;


    private String usuarioDeCreacion;


    private String usuarioDeUltimaModificacion;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable = false)
    private Date fechaYHoraDeCreacion;

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaYHoraDeUltimaModificacion;

    private String url;
    private String anexoPlandeEstudioDisenioCurricular;
    private String tipoDeOferta;
    private String tipoDeGestion;
    private String tipoDeTitulos;
    private String ambitoDeLaETP;
    private String nominaDeFamiliasProfesionales;
    private String titulacionOTipoDeCertificacion;
    private String denominacionDeLaTitulacionOCertificacion;
    private String marcoDeReferencia;
   // private String normaAprobatoriaDelPlanDeEstudioDisenoCurricular;
    private String normaDeValidezNacional;
    private Integer cargaHorariaHSReloj;

    @Temporal(TemporalType.DATE)
    private Date plazoDeVigencia;

    @Temporal(TemporalType.DATE)
    private Date plazoDeValidezNacional;

    private String ambitoDeLaEducacion;
    private String disciplinaSociohumanistica;
    private String area;
    private String institucionesDondeSeDictaLaOferta;
    private String lenguajeDisciplina;
//    private String resolucionAprobatoriaDeCapacitacionLaboral;
private String resolucionAprobatoria;
private String numeroDeAnexo;
    public Resolucion() {
    }

    @PrePersist
    protected void onCreate() {
        fechaYHoraDeCreacion = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        fechaYHoraDeUltimaModificacion = new Date();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsuarioDeCreacion() {
        return usuarioDeCreacion;
    }

    public void setUsuarioDeCreacion(String usuarioDeCreacion) {
        this.usuarioDeCreacion = usuarioDeCreacion;
    }

    public String getUsuarioDeUltimaModificacion() {
        return usuarioDeUltimaModificacion;
    }

    public void setUsuarioDeUltimaModificacion(String usuarioDeUltimaModificacion) {
        this.usuarioDeUltimaModificacion = usuarioDeUltimaModificacion;
    }

    public String getResolucionAprobatoria() {
        return resolucionAprobatoria;
    }

    public void setResolucionAprobatoria(String resolucionAprobatoria) {
        this.resolucionAprobatoria = resolucionAprobatoria;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTipoDeOferta() {
        return tipoDeOferta;
    }

    public void setTipoDeOferta(String tipoDeOferta) {
        this.tipoDeOferta = tipoDeOferta;
    }

    public String getTipoDeGestion() {
        return tipoDeGestion;
    }

    public void setTipoDeGestion(String tipoDeGestion) {
        this.tipoDeGestion = tipoDeGestion;
    }

    public String getTipoDeTitulos() {
        return tipoDeTitulos;
    }

    public void setTipoDeTitulos(String tipoDeTitulos) {
        this.tipoDeTitulos = tipoDeTitulos;
    }

    public String getAmbitoDeLaETP() {
        return ambitoDeLaETP;
    }

    public void setAmbitoDeLaETP(String ambitoDeLaETP) {
        this.ambitoDeLaETP = ambitoDeLaETP;
    }

    public String getNominaDeFamiliasProfesionales() {
        return nominaDeFamiliasProfesionales;
    }

    public void setNominaDeFamiliasProfesionales(String nominaDeFamiliasProfesionales) {
        this.nominaDeFamiliasProfesionales = nominaDeFamiliasProfesionales;
    }

    public String getTitulacionOTipoDeCertificacion() {
        return titulacionOTipoDeCertificacion;
    }

    public void setTitulacionOTipoDeCertificacion(String titulacionOTipoDeCertificacion) {
        this.titulacionOTipoDeCertificacion = titulacionOTipoDeCertificacion;
    }

    public String getDenominacionDeLaTitulacionOCertificacion() {
        return denominacionDeLaTitulacionOCertificacion;
    }

    public void setDenominacionDeLaTitulacionOCertificacion(String denominacionDeLaTitulacionOCertificacion) {
        this.denominacionDeLaTitulacionOCertificacion = denominacionDeLaTitulacionOCertificacion;
    }

    public String getMarcoDeReferencia() {
        return marcoDeReferencia;
    }

    public void setMarcoDeReferencia(String marcoDeReferencia) {
        this.marcoDeReferencia = marcoDeReferencia;
    }

    //public String getNormaAprobatoriaDelPlanDeEstudioDisenoCurricular() {
       // return normaAprobatoriaDelPlanDeEstudioDisenoCurricular;
   // }

  //  public void setNormaAprobatoriaDelPlanDeEstudioDisenoCurricular(String normaAprobatoriaDelPlanDeEstudioDisenoCurricular) {
      //  this.normaAprobatoriaDelPlanDeEstudioDisenoCurricular = normaAprobatoriaDelPlanDeEstudioDisenoCurricular;
   // }

    public String getNormaDeValidezNacional() {
        return normaDeValidezNacional;
    }

    public void setNormaDeValidezNacional(String normaDeValidezNacional) {
        this.normaDeValidezNacional = normaDeValidezNacional;
    }

    public Integer getCargaHorariaHSReloj() {
        return cargaHorariaHSReloj;
    }

    public void setCargaHorariaHSReloj(Integer cargaHorariaHSReloj) {
        this.cargaHorariaHSReloj = cargaHorariaHSReloj;
    }

    public Date getPlazoDeVigencia() {
        return plazoDeVigencia;
    }

    public void setPlazoDeVigencia(Date plazoDeVigencia) {
        this.plazoDeVigencia = plazoDeVigencia;
    }

    public Date getPlazoDeValidezNacional() {
        return plazoDeValidezNacional;
    }

    public void setPlazoDeValidezNacional(Date plazoDeValidezNacional) {
        this.plazoDeValidezNacional = plazoDeValidezNacional;
    }

    public String getAmbitoDeLaEducacion() {
        return ambitoDeLaEducacion;
    }

    public void setAmbitoDeLaEducacion(String ambitoDeLaEducacion) {
        this.ambitoDeLaEducacion = ambitoDeLaEducacion;
    }

    public String getDisciplinaSociohumanistica() {
        return disciplinaSociohumanistica;
    }

    public void setDisciplinaSociohumanistica(String disciplinaSociohumanistica) {
        this.disciplinaSociohumanistica = disciplinaSociohumanistica;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getInstitucionesDondeSeDictaLaOferta() {
        return institucionesDondeSeDictaLaOferta;
    }

    public void setInstitucionesDondeSeDictaLaOferta(String institucionesDondeSeDictaLaOferta) {
        this.institucionesDondeSeDictaLaOferta = institucionesDondeSeDictaLaOferta;
    }

    public String getLenguajeDisciplina() {
        return lenguajeDisciplina;
    }

    public void setLenguajeDisciplina(String lenguajeDisciplina) {
        this.lenguajeDisciplina = lenguajeDisciplina;
    }

//    public String getResolucionAprobatoriaDeCapacitacionLaboral() {
//        return resolucionAprobatoriaDeCapacitacionLaboral;
//    }
//
//    public void setResolucionAprobatoriaDeCapacitacionLaboral(String resolucionAprobatoriaDeCapacitacionLaboral) {
//        this.resolucionAprobatoriaDeCapacitacionLaboral = resolucionAprobatoriaDeCapacitacionLaboral;
//    }

    public String getNumeroDeAnexo() {
        return numeroDeAnexo;
    }

    public void setNumeroDeAnexo(String numeroDeAnexo) {
        this.numeroDeAnexo = numeroDeAnexo;
    }

    public String getAnexoPlandeEstudioDisenioCurricular() {
        return anexoPlandeEstudioDisenioCurricular;
    }

    public void setAnexoPlandeEstudioDisenioCurricular(String anexoPlandeEstudioDisenioCurricular) {
        this.anexoPlandeEstudioDisenioCurricular = anexoPlandeEstudioDisenioCurricular;
    }

    @Override
    public String toString() {
        return "Resolucion{" +
                "id='" + id + '\'' +
                ", usuarioDeCreacion='" + usuarioDeCreacion + '\'' +
                ", usuarioDeUltimaModificacion='" + usuarioDeUltimaModificacion + '\'' +
                ", fechaYHoraDeCreacion=" + fechaYHoraDeCreacion +
                ", fechaYHoraDeUltimaModificacion=" + fechaYHoraDeUltimaModificacion +
                ", url='" + url + '\'' +
                ", anexoPlandeEstudioDisenioCurricular='" + anexoPlandeEstudioDisenioCurricular + '\'' +
                ", tipoDeOferta='" + tipoDeOferta + '\'' +
                ", tipoDeGestion='" + tipoDeGestion + '\'' +
                ", tipoDeTitulos='" + tipoDeTitulos + '\'' +
                ", ambitoDeLaETP='" + ambitoDeLaETP + '\'' +
                ", nominaDeFamiliasProfesionales='" + nominaDeFamiliasProfesionales + '\'' +
                ", titulacionOTipoDeCertificacion='" + titulacionOTipoDeCertificacion + '\'' +
                ", denominacionDeLaTitulacionOCertificacion='" + denominacionDeLaTitulacionOCertificacion + '\'' +
                ", marcoDeReferencia='" + marcoDeReferencia + '\'' +
              //  ", normaAprobatoriaDelPlanDeEstudioDisenoCurricular='" + normaAprobatoriaDelPlanDeEstudioDisenoCurricular + '\'' +
                ", normaDeValidezNacional='" + normaDeValidezNacional + '\'' +
                ", cargaHorariaHSReloj=" + cargaHorariaHSReloj +
                ", plazoDeVigencia=" + plazoDeVigencia +
                ", plazoDeValidezNacional=" + plazoDeValidezNacional +
                ", ambitoDeLaEducacion='" + ambitoDeLaEducacion + '\'' +
                ", disciplinaSociohumanistica='" + disciplinaSociohumanistica + '\'' +
                ", area='" + area + '\'' +
                ", institucionesDondeSeDictaLaOferta='" + institucionesDondeSeDictaLaOferta + '\'' +
                ", lenguajeDisciplina='" + lenguajeDisciplina + '\'' +
                ", resolucionAprobatoria='" + resolucionAprobatoria + '\'' +
                ", numeroDeAnexo='" + numeroDeAnexo + '\'' +
                '}';
    }
}
