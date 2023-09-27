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
                row.createCell(0).setCellValue(resolucion.getId());
                row.createCell(1).setCellValue(resolucion.getTipoDeOferta());
                row.createCell(2).setCellValue(resolucion.getNominaDeFamiliasProfesionales());
                row.createCell(3).setCellValue(resolucion.getDenominacionDeLaTitulacionOCertificacion());
                row.createCell(4).setCellValue(resolucion.getResolucionAprobatoria());
                row.createCell(5).setCellValue(resolucion.getNumeroDeAnexo());
                row.createCell(6).setCellValue(resolucion.getCargaHorariaHSReloj());
                row.createCell(7).setCellValue(resolucion.getInstitucionesDondeSeDictaLaOferta());
                row.createCell(8).setCellValue(resolucion.getPlazoDeVigencia().toString());
                row.createCell(9).setCellValue(resolucion.getUrl());
            }

            if (tipo.equalsIgnoreCase("EDUCACIÓN TECNICA PROFESIONAL")) {
                row.createCell(0).setCellValue(resolucion.getId());
                row.createCell(1).setCellValue(resolucion.getTipoDeOferta());
                row.createCell(2).setCellValue(resolucion.getTipoDeGestion());
                row.createCell(3).setCellValue(resolucion.getTipoDeTitulos());
                row.createCell(4).setCellValue(resolucion.getResolucionAprobatoria());
                row.createCell(5).setCellValue(resolucion.getNumeroDeAnexo());
                row.createCell(6).setCellValue(resolucion.getAmbitoDeLaETP());
                row.createCell(7).setCellValue(resolucion.getNominaDeFamiliasProfesionales());
                row.createCell(8).setCellValue(resolucion.getTitulacionOTipoDeCertificacion());
                row.createCell(9).setCellValue(resolucion.getDenominacionDeLaTitulacionOCertificacion());
                row.createCell(10).setCellValue(resolucion.getMarcoDeReferencia());
            //    row.createCell(11).setCellValue(resolucion.getNormaAprobatoriaDelPlanDeEstudioDisenoCurricular());
                row.createCell(12).setCellValue(resolucion.getNormaDeValidezNacional());
                row.createCell(13).setCellValue(resolucion.getCargaHorariaHSReloj());
                row.createCell(14).setCellValue(resolucion.getPlazoDeVigencia().toString());
                row.createCell(15).setCellValue(resolucion.getPlazoDeValidezNacional().toString());
                row.createCell(16).setCellValue(resolucion.getUrl());

            }
            if (tipo.equalsIgnoreCase("SOCIO HUMANISTICA")) {
                row.createCell(0).setCellValue(resolucion.getId());
                row.createCell(1).setCellValue(resolucion.getTipoDeOferta());
                row.createCell(2).setCellValue(resolucion.getTipoDeGestion());
                row.createCell(3).setCellValue(resolucion.getTipoDeTitulos());
                row.createCell(4).setCellValue(resolucion.getResolucionAprobatoria());
                row.createCell(5).setCellValue(resolucion.getNumeroDeAnexo());
                row.createCell(6).setCellValue(resolucion.getAmbitoDeLaEducacion());
                row.createCell(7).setCellValue(resolucion.getDisciplinaSociohumanistica());
                row.createCell(8).setCellValue(resolucion.getArea());
                row.createCell(9).setCellValue(resolucion.getMarcoDeReferencia());
              //  row.createCell(10).setCellValue(resolucion.getNormaAprobatoriaDelPlanDeEstudioDisenoCurricular());
                row.createCell(11).setCellValue(resolucion.getNormaDeValidezNacional());
                row.createCell(12).setCellValue(resolucion.getCargaHorariaHSReloj());
                row.createCell(13).setCellValue(resolucion.getInstitucionesDondeSeDictaLaOferta());
                row.createCell(14).setCellValue(resolucion.getPlazoDeVigencia().toString());
                row.createCell(15).setCellValue(resolucion.getPlazoDeValidezNacional().toString());
                row.createCell(16).setCellValue(resolucion.getUrl());


            }
//

            if (tipo.equalsIgnoreCase("ARTISTICA ESPECIFICA")) {
                row.createCell(0).setCellValue(resolucion.getId());
                row.createCell(1).setCellValue(resolucion.getTipoDeOferta());
                row.createCell(2).setCellValue(resolucion.getTipoDeGestion());
                row.createCell(3).setCellValue(resolucion.getTipoDeTitulos());
                row.createCell(4).setCellValue(resolucion.getResolucionAprobatoria());
                row.createCell(5).setCellValue(resolucion.getNumeroDeAnexo());
                row.createCell(6).setCellValue(resolucion.getAmbitoDeLaEducacion());
                row.createCell(7).setCellValue(resolucion.getLenguajeDisciplina());
                row.createCell(8).setCellValue(resolucion.getArea());
                row.createCell(9).setCellValue(resolucion.getMarcoDeReferencia());
            //    row.createCell(10).setCellValue(resolucion.getNormaAprobatoriaDelPlanDeEstudioDisenoCurricular());
                row.createCell(11).setCellValue(resolucion.getNormaDeValidezNacional());
                row.createCell(12).setCellValue(resolucion.getCargaHorariaHSReloj());
                row.createCell(13).setCellValue(resolucion.getInstitucionesDondeSeDictaLaOferta());
                row.createCell(14).setCellValue(resolucion.getPlazoDeVigencia().toString());
                row.createCell(15).setCellValue(resolucion.getPlazoDeValidezNacional().toString());
                row.createCell(16).setCellValue(resolucion.getUrl());

            }


        }

        // Convertir el libro de trabajo a bytes
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        workbook.close();

        return outputStream.toByteArray();
    }
}
