package com.resoluciones.service;

import com.resoluciones.entities.Resolucion;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

public class ExcelGenerator {
    public static byte[] generateExcel(List<Resolucion> resoluciones, String tipo) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Resoluciones");

        // Crear encabezados de columnas
        Row headerRow = sheet.createRow(0);
        String[] headers;
        switch (tipo) {
            case "EDUCACIÓN TECNICA PROFESIONAL":
                headers = new String[]{"ID", "TIPO DE OFERTA", "TIPO DE GESTIÓN", "TIPO DE TÍTULOS", "RESOLUCIÓN APROBATORIA","NÚMERO DE ANEXO", "ÁMBITO DE LA ETP", "NÓMINA DE FAMILIAS PROFESIONALES", "TITULACIÓN O TIPO DE CERTIFICACIÓN", "DENOMINACIÓN DE LA TITULACIÓN O CERTIFICACIÓN", "MARCO DE REFERENCIA", "NORMA APROBATORIA DEL PLAN DE ESTUDIO/DISEÑO CURRICULAR", "NORMA DE VALIDEZ NACIONAL", "CARGA HORARIA (HS RELOJ)", "PLAZO DE VIGENCIA", "PLAZO DE VALIDEZ NACIONAL", "ARCHIVO"};
                break;
            case "SOCIO HUMANISTICA":
                headers = new String[]{"ID", "TIPO DE OFERTA", "TIPO DE GESTIÓN", "TIPO DE TÍTULOS", "RESOLUCIÓN APROBATORIA","NÚMERO DE ANEXO", "ÁMBITO DE LA EDUCACIÓN", "DISCIPLINA SOCIO HUMANÍSTICA", "ÁREA", "MARCO DE REFERENCIA", "NORMA APROBATORIA DEL PLAN DE ESTUDIO/DISEÑO CURRICULAR", "NORMA DE VALIDEZ NACIONAL", "CARGA HORARIA (HS RELOJ)", "INSTITUCIONES DONDE SE DICTA LA OFERTA", "PLAZO DE VIGENCIA", "PLAZO DE VALIDEZ NACIONAL", "ARCHIVO"};
                break;
            case "ARTISTICA ESPECIFICA":
                headers = new String[]{"ID", "TIPO DE OFERTA", "TIPO DE GESTIÓN", "TIPO DE TÍTULOS", "RESOLUCIÓN APROBATORIA","NÚMERO DE ANEXO", "ÁMBITO DE LA EDUCACIÓN", "LENGUAJE DISCIPLINA", "ÁREA", "DENOMINACIÓN DE LA TITULACIÓN O CERTIFICACIÓN", "MARCO DE REFERENCIA", "NORMA APROBATORIA DEL PLAN DE ESTUDIO/DISEÑO CURRICULAR", "NORMA DE VALIDEZ NACIONAL", "CARGA HORARIA (HS RELOJ)", "INSTITUCIONES DONDE SE DICTA LA OFERTA", "PLAZO DE VIGENCIA", "PLAZO DE VALIDEZ NACIONAL", "ARCHIVO"};
                break;
            case "CAPACITACIÓN LABORAL":
                headers = new String[]{"ID", "TIPO DE OFERTA", "NÓMINA DE FAMILIAS PROFESIONALES", "DENOMINACIÓN DE LA CERTIFICACIÓN", "RESOLUCIÓN APROBATORIA","NÚMERO DE ANEXO", "CARGA HORARIA (HS RELOJ)", "INSTITUCIONES DONDE SE DICTA LA OFERTA", "PLAZO DE VIGENCIA", "ARCHIVO"};
                break;
            default:
                throw new IllegalArgumentException("Tipo de resolución no válido");
        }


        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }


        // Llenar filas con datos
        for (int rowNum = 1; rowNum <= resoluciones.size(); rowNum++) {

            Row row = sheet.createRow(rowNum);
            Resolucion resolucion = resoluciones.get(rowNum - 1);

            if (tipo.equalsIgnoreCase("CAPACITACIÓN LABORAL")) {
                setCellValueOrBlank(row.createCell(0), resolucion.getId());
                setCellValueOrBlank(row.createCell(1), resolucion.getTipoDeOferta());
                setCellValueOrBlank(row.createCell(2), resolucion.getNominaDeFamiliasProfesionales());
                setCellValueOrBlank(row.createCell(3), resolucion.getDenominacionDeLaTitulacionOCertificacion());
                setCellValueOrBlank(row.createCell(4), resolucion.getResolucionAprobatoria());
                setCellValueOrBlank(row.createCell(5), resolucion.getNumeroDeAnexo());
                setCellValueOrBlank(row.createCell(6), resolucion.getCargaHorariaHSReloj());
                setCellValueOrBlank(row.createCell(7), resolucion.getInstitucionesDondeSeDictaLaOferta());
                setCellValueOrBlank(row.createCell(8), resolucion.getPlazoDeVigencia() != null ? resolucion.getPlazoDeVigencia().toString() : null);
                setCellValueOrBlank(row.createCell(9), resolucion.getUrl());
            }

            if (tipo.equalsIgnoreCase("EDUCACIÓN TECNICA PROFESIONAL")) {
                setCellValueOrBlank(row.createCell(0), resolucion.getId());
                setCellValueOrBlank(row.createCell(1), resolucion.getTipoDeOferta());
                setCellValueOrBlank(row.createCell(2), resolucion.getTipoDeGestion());
                setCellValueOrBlank(row.createCell(3), resolucion.getTipoDeTitulos());
                setCellValueOrBlank(row.createCell(4), resolucion.getResolucionAprobatoria());
                setCellValueOrBlank(row.createCell(5), resolucion.getNumeroDeAnexo());
                setCellValueOrBlank(row.createCell(6), resolucion.getAmbitoDeLaETP());
                setCellValueOrBlank(row.createCell(7), resolucion.getNominaDeFamiliasProfesionales());
                setCellValueOrBlank(row.createCell(8), resolucion.getTitulacionOTipoDeCertificacion());
                setCellValueOrBlank(row.createCell(9), resolucion.getDenominacionDeLaTitulacionOCertificacion());
                setCellValueOrBlank(row.createCell(10), resolucion.getMarcoDeReferencia());
// row.createCell(11).setCellValue(resolucion.getNormaAprobatoriaDelPlanDeEstudioDisenoCurricular());
                setCellValueOrBlank(row.createCell(12), resolucion.getNormaDeValidezNacional());
                setCellValueOrBlank(row.createCell(13), resolucion.getCargaHorariaHSReloj());
                setCellValueOrBlank(row.createCell(14), resolucion.getPlazoDeVigencia() != null ? resolucion.getPlazoDeVigencia().toString() : null);
                setCellValueOrBlank(row.createCell(15), resolucion.getPlazoDeValidezNacional() != null ? resolucion.getPlazoDeValidezNacional().toString() : null);
                setCellValueOrBlank(row.createCell(16), resolucion.getUrl());

            }
            if (tipo.equalsIgnoreCase("SOCIO HUMANISTICA")) {
                setCellValueOrBlank(row.createCell(0), resolucion.getId());
                setCellValueOrBlank(row.createCell(1), resolucion.getTipoDeOferta());
                setCellValueOrBlank(row.createCell(2), resolucion.getTipoDeGestion());
                setCellValueOrBlank(row.createCell(3), resolucion.getTipoDeTitulos());
                setCellValueOrBlank(row.createCell(4), resolucion.getResolucionAprobatoria());
                setCellValueOrBlank(row.createCell(5), resolucion.getNumeroDeAnexo());
                setCellValueOrBlank(row.createCell(6), resolucion.getAmbitoDeLaEducacion());
                setCellValueOrBlank(row.createCell(7), resolucion.getDisciplinaSociohumanistica());
                setCellValueOrBlank(row.createCell(8), resolucion.getArea());
                setCellValueOrBlank(row.createCell(9), resolucion.getMarcoDeReferencia());
// row.createCell(10).setCellValue(resolucion.getNormaAprobatoriaDelPlanDeEstudioDisenoCurricular());
                setCellValueOrBlank(row.createCell(11), resolucion.getNormaDeValidezNacional());
                setCellValueOrBlank(row.createCell(12), resolucion.getCargaHorariaHSReloj());
                setCellValueOrBlank(row.createCell(13), resolucion.getInstitucionesDondeSeDictaLaOferta());
                setCellValueOrBlank(row.createCell(14), resolucion.getPlazoDeVigencia() != null ? resolucion.getPlazoDeVigencia().toString() : null);
                setCellValueOrBlank(row.createCell(15), resolucion.getPlazoDeValidezNacional() != null ? resolucion.getPlazoDeValidezNacional().toString() : null);
                setCellValueOrBlank(row.createCell(16), resolucion.getUrl());


            }
//

            if (tipo.equalsIgnoreCase("ARTISTICA ESPECIFICA")) {
                setCellValueOrBlank(row.createCell(0), resolucion.getId());
                setCellValueOrBlank(row.createCell(1), resolucion.getTipoDeOferta());
                setCellValueOrBlank(row.createCell(2), resolucion.getTipoDeGestion());
                setCellValueOrBlank(row.createCell(3), resolucion.getTipoDeTitulos());
                setCellValueOrBlank(row.createCell(4), resolucion.getResolucionAprobatoria());
                setCellValueOrBlank(row.createCell(5), resolucion.getNumeroDeAnexo());
                setCellValueOrBlank(row.createCell(6), resolucion.getAmbitoDeLaEducacion());
                setCellValueOrBlank(row.createCell(7), resolucion.getLenguajeDisciplina());
                setCellValueOrBlank(row.createCell(8), resolucion.getArea());
                setCellValueOrBlank(row.createCell(9), resolucion.getMarcoDeReferencia());
// row.createCell(10).setCellValue(resolucion.getNormaAprobatoriaDelPlanDeEstudioDisenoCurricular());
                setCellValueOrBlank(row.createCell(11), resolucion.getNormaDeValidezNacional());
                setCellValueOrBlank(row.createCell(12), resolucion.getCargaHorariaHSReloj());
                setCellValueOrBlank(row.createCell(13), resolucion.getInstitucionesDondeSeDictaLaOferta());
                setCellValueOrBlank(row.createCell(14), resolucion.getPlazoDeVigencia() != null ? resolucion.getPlazoDeVigencia().toString() : null);
                setCellValueOrBlank(row.createCell(15), resolucion.getPlazoDeValidezNacional() != null ? resolucion.getPlazoDeValidezNacional().toString() : null);
                setCellValueOrBlank(row.createCell(16), resolucion.getUrl());

            }


        }

        // Convertir el libro de trabajo a bytes
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        workbook.close();

        return outputStream.toByteArray();
    }
    private static void setCellValueOrBlank(Cell cell, Object value) {
        if (value != null && !value.toString().isEmpty()) {
            cell.setCellValue(value.toString());
        } else {
            cell.setCellValue(" ");
        }
    }
}
