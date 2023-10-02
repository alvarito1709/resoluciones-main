package com.resoluciones.repositories;

import com.resoluciones.entities.Resolucion;
import org.springframework.data.jpa.domain.Specification;
import org.thymeleaf.util.StringUtils;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;


//import com.resoluciones.entities.Resolucion;
//import org.springframework.data.jpa.domain.Specification;
//import javax.persistence.criteria.CriteriaBuilder;
//import javax.persistence.criteria.CriteriaQuery;
//import javax.persistence.criteria.Predicate;
//import javax.persistence.criteria.Root;
//import java.util.ArrayList;
//import java.util.List;
//
//public class ResolucionSpecifications {
//
//    public static Specification<Resolucion> withSearchCriteria(
//            String tipoDeGestion,
//            String tipoDeOferta,
//            String tipoDeTitulo,
//            String tipoDeNomina,
//            String area,
//            String nombreDeTitulo,
//            String institucionesDondeSeDictaLaOferta,
//            String id
//            // Agrega aquí más parámetros de búsqueda si es necesario
//    ) {
//        return (Root<Resolucion> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) -> {
//            List<Predicate> predicates = new ArrayList<>();
//
//            if (tipoDeGestion != null) {
//                predicates.add(criteriaBuilder.equal(root.get("tipoDeGestion"), tipoDeGestion));
//            }
//
//            if (tipoDeOferta != null) {
//                System.out.println(tipoDeOferta);
//                predicates.add(criteriaBuilder.equal(root.get("tipoDeOferta"), tipoDeOferta));
//            }
//
//            if (tipoDeTitulo != null) {
//                predicates.add(criteriaBuilder.equal(root.get("tipoDeTitulos"), tipoDeTitulo));
//            }
//            if (area != null) {
//                predicates.add(criteriaBuilder.equal(root.get("area"), area));
//            }
//
//            if (nombreDeTitulo != null) {
//                predicates.add(criteriaBuilder.like(root.get("nombreDeTitulo"), nombreDeTitulo));
//            }
//
//            if (institucionesDondeSeDictaLaOferta != null) {
//                predicates.add(criteriaBuilder.like(root.get("institucionesDondeSeDictaLaOferta"), institucionesDondeSeDictaLaOferta));
//            }
//
//            if (id != null) {
//                predicates.add(criteriaBuilder.equal(root.get("id"), id));
//            }
//            if (tipoDeNomina != null) {
//                predicates.add(criteriaBuilder.equal(root.get("nominaDeFamiliasProfesionales"), tipoDeNomina));
//            }
//
//
//            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
//        };
//    }
//}
public class ResolucionSpecifications implements Specification<Resolucion> {
     private final String tipoDeGestion;
            private final String tipoDeOferta;
            private final String tipoDeTitulo;
            private final String tipoDeNomina;
            private final String area;
            private final String nombreDeTitulo;
            private final String institucionesDondeSeDictaLaOferta;
             private final String cnofDondeSeDictaLaOferta;
           private final String id;

    public ResolucionSpecifications(String tipoDeGestion, String tipoDeOferta, String tipoDeTitulo, String tipoDeNomina, String area, String nombreDeTitulo, String institucionesDondeSeDictaLaOferta, String cnofDondeSeDictaLaOferta, String id) {
        this.tipoDeGestion = tipoDeGestion;
        this.tipoDeOferta = tipoDeOferta;
        this.tipoDeTitulo = tipoDeTitulo;
        this.tipoDeNomina = tipoDeNomina;
        this.area = area;
        this.nombreDeTitulo = nombreDeTitulo;
        this.institucionesDondeSeDictaLaOferta = institucionesDondeSeDictaLaOferta;
        this.cnofDondeSeDictaLaOferta = cnofDondeSeDictaLaOferta;
        this.id = id;
    }

    @Override
    public Predicate toPredicate(Root<Resolucion> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();


        if (!StringUtils.isEmpty(tipoDeGestion)) {
                predicates.add(criteriaBuilder.equal(root.get("tipoDeGestion"), tipoDeGestion));
            }

            if (!StringUtils.isEmpty(tipoDeOferta)) {
                System.out.println(tipoDeOferta);
                predicates.add(criteriaBuilder.equal(root.get("tipoDeOferta"), tipoDeOferta));
            }

            if (!StringUtils.isEmpty(tipoDeTitulo)) {
                predicates.add(criteriaBuilder.equal(root.get("tipoDeTitulos"), tipoDeTitulo));
            }
            if (!StringUtils.isEmpty(area)) {
                predicates.add(criteriaBuilder.equal(root.get("area"), area));
            }

            if (!StringUtils.isEmpty(nombreDeTitulo)) {
                predicates.add(criteriaBuilder.like(root.get("nombreDeTitulo"),"%" + nombreDeTitulo + "%" ));
            }

            if (!StringUtils.isEmpty(institucionesDondeSeDictaLaOferta)) {
                predicates.add(criteriaBuilder.like(root.get("institucionesDondeSeDictaLaOferta"), institucionesDondeSeDictaLaOferta));
            }

        if (!StringUtils.isEmpty(cnofDondeSeDictaLaOferta)) {
            predicates.add(criteriaBuilder.like(root.get("cnofDondeSeDictaLaOferta"), cnofDondeSeDictaLaOferta));
        }

            if (!StringUtils.isEmpty(id )) {
                predicates.add(criteriaBuilder.equal(root.get("id"), id));
            }
            if (!StringUtils.isEmpty(tipoDeNomina)) {
                predicates.add(criteriaBuilder.equal(root.get("nominaDeFamiliasProfesionales"), tipoDeNomina));
            }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}