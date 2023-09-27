package com.resoluciones.service;

import com.resoluciones.entities.Resolucion;
import com.resoluciones.repositories.ResolucionRepository;
import com.resoluciones.repositories.ResolucionSpecifications;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
public class ResolucionService {

    private final ResolucionRepository resolucionRepository;

    @Autowired
    public ResolucionService(ResolucionRepository resolucionRepository) {
        this.resolucionRepository = resolucionRepository;
    }

    public Resolucion crearResolucion(Resolucion resolucion) {
        return resolucionRepository.save(resolucion);
    }

    public void crearTodasResolucion(List<Resolucion> resolucion) {
        resolucionRepository.saveAll(resolucion);
    }

    public Resolucion obtenerResolucionPorId(String id) {
        return resolucionRepository.findById(id).orElse(null);
    }

    public List<Resolucion> obtenerTodasResoluciones() {
        return resolucionRepository.findAll();
    }

    public Resolucion actualizarResolucion(String id, Resolucion resolucion) {
        Optional<Resolucion> resolucionExistente = resolucionRepository.findById(id);
        if (resolucionExistente.isPresent()) {
            Resolucion resolucionActualizada = resolucionExistente.get();
            // Actualiza los atributos necesarios según tus requisitos
            return resolucionRepository.save(resolucionActualizada);
        } else {
            throw new IllegalArgumentException("Resolución no encontrada con ID: " + id);
        }
    }

    public void eliminarResolucion(String id) {
        resolucionRepository.deleteById(id);
    }

    public List<Resolucion> buscarResolucionesConFiltros(ResolucionSpecifications spec) {

        return resolucionRepository.findAll(spec);
    }
    public List<Resolucion> buscarPorTipoDeOferta(String tipoDeOferta) {
        return resolucionRepository.findByTipoDeOferta(tipoDeOferta);
    }
    public List<Resolucion> generarListaDeResoluciones() {
        List<Resolucion> lista = new ArrayList<>();

        for (int i = 0; i < 50; i++) {
            Resolucion resolucion = new Resolucion();
            resolucion.setId(UUID.randomUUID().toString());
            resolucion.setUsuarioDeCreacion("Usuario" + i);
            resolucion.setUsuarioDeUltimaModificacion("Usuario" + i);
            resolucion.setFechaYHoraDeCreacion(new Date());
            resolucion.setFechaYHoraDeUltimaModificacion(new Date());
            resolucion.setUrl("http://ejemplo.com/" + i);
            resolucion.setTipoDeOferta("EDUCACIÓN TECNICA PROFESIONAL");
            resolucion.setTipoDeGestion("TipoGestion" + i);
            resolucion.setTipoDeTitulos("TipoTitulos" + i);
            resolucion.setAmbitoDeLaETP("AmbitoETP" + i);
            resolucion.setNominaDeFamiliasProfesionales("NominaFamiliasProfesionales" + i);
            resolucion.setTitulacionOTipoDeCertificacion("TitulacionCertificacion" + i);
            resolucion.setDenominacionDeLaTitulacionOCertificacion("DenominacionTitulacionCertificacion" + i);
            resolucion.setMarcoDeReferencia("MarcoReferencia" + i);
           // resolucion.setNormaAprobatoriaDelPlanDeEstudioDisenoCurricular("NormaAprobatoriaPlanEstudio" + i);
            resolucion.setNormaDeValidezNacional("NormaValidezNacional" + i);
            resolucion.setCargaHorariaHSReloj(i * 10); // Cambiar la fórmula si es necesario
            resolucion.setPlazoDeVigencia(new Date());
            resolucion.setPlazoDeValidezNacional(new Date());
            resolucion.setAmbitoDeLaEducacion("AmbitoEducacion" + i);
            resolucion.setDisciplinaSociohumanistica("DisciplinaSociohumanistica" + i);
            resolucion.setArea("Area" + i);
            resolucion.setInstitucionesDondeSeDictaLaOferta("InstitucionesDictaOferta" + i);
            resolucion.setLenguajeDisciplina("LenguajeDisciplina" + i);
//            resolucion.setResolucionAprobatoriaDeCapacitacionLaboral("ResolucionAprobatoriaCapacitacionLaboral" + i);

            lista.add(resolucion);
        }
        for (int i = 0; i < 50; i++) {
            Resolucion resolucion = new Resolucion();
            resolucion.setId(UUID.randomUUID().toString());
            resolucion.setUsuarioDeCreacion("Usuario" + i);
            resolucion.setUsuarioDeUltimaModificacion("Usuario" + i);
            resolucion.setFechaYHoraDeCreacion(new Date());
            resolucion.setFechaYHoraDeUltimaModificacion(new Date());
            resolucion.setUrl("http://ejemplo.com/" + i);
            resolucion.setTipoDeOferta("SOCIO HUMANISTICA");
            resolucion.setTipoDeGestion("TipoGestion" + i);
            resolucion.setTipoDeTitulos("TipoTitulos" + i);
            resolucion.setAmbitoDeLaETP("AmbitoETP" + i);
            resolucion.setNominaDeFamiliasProfesionales("NominaFamiliasProfesionales" + i);
            resolucion.setTitulacionOTipoDeCertificacion("TitulacionCertificacion" + i);
            resolucion.setDenominacionDeLaTitulacionOCertificacion("DenominacionTitulacionCertificacion" + i);
            resolucion.setMarcoDeReferencia("MarcoReferencia" + i);
            //resolucion.setNormaAprobatoriaDelPlanDeEstudioDisenoCurricular("NormaAprobatoriaPlanEstudio" + i);
            resolucion.setNormaDeValidezNacional("NormaValidezNacional" + i);
            resolucion.setCargaHorariaHSReloj(i * 10); // Cambiar la fórmula si es necesario
            resolucion.setPlazoDeVigencia(new Date());
            resolucion.setPlazoDeValidezNacional(new Date());
            resolucion.setAmbitoDeLaEducacion("AmbitoEducacion" + i);
            resolucion.setDisciplinaSociohumanistica("DisciplinaSociohumanistica" + i);
            resolucion.setArea("Area" + i);
            resolucion.setInstitucionesDondeSeDictaLaOferta("InstitucionesDictaOferta" + i);
            resolucion.setLenguajeDisciplina("LenguajeDisciplina" + i);
//            resolucion.setResolucionAprobatoriaDeCapacitacionLaboral("ResolucionAprobatoriaCapacitacionLaboral" + i);

            lista.add(resolucion);
        }
        for (int i = 0; i < 50; i++) {
            Resolucion resolucion = new Resolucion();
            resolucion.setId(UUID.randomUUID().toString());
            resolucion.setUsuarioDeCreacion("Usuario" + i);
            resolucion.setUsuarioDeUltimaModificacion("Usuario" + i);
            resolucion.setFechaYHoraDeCreacion(new Date());
            resolucion.setFechaYHoraDeUltimaModificacion(new Date());
            resolucion.setUrl("http://ejemplo.com/" + i);
            resolucion.setTipoDeOferta("ARTISTICA ESPECIFICA");
            resolucion.setTipoDeGestion("TipoGestion" + i);
            resolucion.setTipoDeTitulos("TipoTitulos" + i);
            resolucion.setAmbitoDeLaETP("AmbitoETP" + i);
            resolucion.setNominaDeFamiliasProfesionales("NominaFamiliasProfesionales" + i);
            resolucion.setTitulacionOTipoDeCertificacion("TitulacionCertificacion" + i);
            resolucion.setDenominacionDeLaTitulacionOCertificacion("DenominacionTitulacionCertificacion" + i);
            resolucion.setMarcoDeReferencia("MarcoReferencia" + i);
           // resolucion.setNormaAprobatoriaDelPlanDeEstudioDisenoCurricular("NormaAprobatoriaPlanEstudio" + i);
            resolucion.setNormaDeValidezNacional("NormaValidezNacional" + i);
            resolucion.setCargaHorariaHSReloj(i * 10); // Cambiar la fórmula si es necesario
            resolucion.setPlazoDeVigencia(new Date());
            resolucion.setPlazoDeValidezNacional(new Date());
            resolucion.setAmbitoDeLaEducacion("AmbitoEducacion" + i);
            resolucion.setDisciplinaSociohumanistica("DisciplinaSociohumanistica" + i);
            resolucion.setArea("Area" + i);
            resolucion.setInstitucionesDondeSeDictaLaOferta("InstitucionesDictaOferta" + i);
            resolucion.setLenguajeDisciplina("LenguajeDisciplina" + i);
//            resolucion.setResolucionAprobatoriaDeCapacitacionLaboral("ResolucionAprobatoriaCapacitacionLaboral" + i);

            lista.add(resolucion);
        }
        for (int i = 0; i < 50; i++) {
            Resolucion resolucion = new Resolucion();
            resolucion.setId(UUID.randomUUID().toString());
            resolucion.setUsuarioDeCreacion("Usuario" + i);
            resolucion.setUsuarioDeUltimaModificacion("Usuario" + i);
            resolucion.setFechaYHoraDeCreacion(new Date());
            resolucion.setFechaYHoraDeUltimaModificacion(new Date());
            resolucion.setUrl("http://ejemplo.com/" + i);
            resolucion.setTipoDeOferta("CAPACITACIÓN LABORAL");
            resolucion.setTipoDeGestion("TipoGestion" + i);
            resolucion.setTipoDeTitulos("TipoTitulos" + i);
            resolucion.setAmbitoDeLaETP("AmbitoETP" + i);
            resolucion.setNominaDeFamiliasProfesionales("NominaFamiliasProfesionales" + i);
            resolucion.setTitulacionOTipoDeCertificacion("TitulacionCertificacion" + i);
            resolucion.setDenominacionDeLaTitulacionOCertificacion("DenominacionTitulacionCertificacion" + i);
            resolucion.setMarcoDeReferencia("MarcoReferencia" + i);
         //   resolucion.setNormaAprobatoriaDelPlanDeEstudioDisenoCurricular("NormaAprobatoriaPlanEstudio" + i);
            resolucion.setNormaDeValidezNacional("NormaValidezNacional" + i);
            resolucion.setCargaHorariaHSReloj(i * 10); // Cambiar la fórmula si es necesario
            resolucion.setPlazoDeVigencia(new Date());
            resolucion.setPlazoDeValidezNacional(new Date());
            resolucion.setAmbitoDeLaEducacion("AmbitoEducacion" + i);
            resolucion.setDisciplinaSociohumanistica("DisciplinaSociohumanistica" + i);
            resolucion.setArea("Area" + i);
            resolucion.setInstitucionesDondeSeDictaLaOferta("InstitucionesDictaOferta" + i);
            resolucion.setLenguajeDisciplina("LenguajeDisciplina" + i);
//            resolucion.setResolucionAprobatoriaDeCapacitacionLaboral("ResolucionAprobatoriaCapacitacionLaboral" + i);

            lista.add(resolucion);
        }

        return lista;
    }
    public Resolucion buscarPorResolucionAprobatoria(String resolucionAprobatoriaDeCapacitacionLaboral) {
        return resolucionRepository.findByResolucionAprobatoria(resolucionAprobatoriaDeCapacitacionLaboral);
    }
}
