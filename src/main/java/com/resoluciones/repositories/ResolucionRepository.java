package com.resoluciones.repositories;

import com.resoluciones.entities.Resolucion;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResolucionRepository extends JpaRepository<Resolucion, String>, JpaSpecificationExecutor<Resolucion> {
    List<Resolucion> findAll(Specification<Resolucion> spec);
    List<Resolucion> findByTipoDeOferta(String tipoDeOferta);

//    Resolucion findByResolucionAprobatoriaDeCapacitacionLaboral(String resolucionAprobatoriaDeCapacitacionLaboral);
    Resolucion findByResolucionAprobatoria(String resolucionAprobatoria);
    @Query("SELECT " +
            "    (COUNT(r) * 100.0 / COUNT(r)) " +
            "FROM " +
            "    Resolucion r " +
            "WHERE " +
            "    r.tipoDeOferta = :tipoOfertaParam")
    Double calculatePercentageByTipoOferta(@Param("tipoOfertaParam") String tipoOferta);


    @Query(value = "SELECT r " +
            "FROM Resolucion r " +
            "WHERE r.denominacionDeLaTitulacionOCertificacion " +
            "like  %:denominacion%")
    List<Resolucion> findByDenominacion(String denominacion);
}
