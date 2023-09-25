package com.resoluciones.Error;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.ServletWebRequest;

import javax.servlet.http.HttpServletRequest;

@Controller
public class ErrorConfig implements ErrorController {

    private final ErrorAttributes errorAttributes;

    @Autowired
    public ErrorConfig(ErrorAttributes errorAttributes) {
        this.errorAttributes = errorAttributes;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request, Model model) {
        // Obtener el código y mensaje de error
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
        String errorMessage = getErrorMessage(request);

        // Pasar el mensaje de error al modelo
        model.addAttribute("statusCode", statusCode);
        model.addAttribute("errorMessage", errorMessage);

        // Devolver la vista de error
        return "error";
    }

    //    @GetMapping("/error")
//    public String showErrorPage(@RequestParam("message") String message, Model model) {
//        model.addAttribute("errorMessage", message);
//        return "error";
//    }
    public String getErrorPath() {
        return "/error";
    }

    private String getErrorMessage(HttpServletRequest request) {
        Throwable throwable = errorAttributes.getError(new ServletWebRequest(request));
        if (throwable != null) {
            return throwable.getMessage();
        }
        return "Error desconocido";
    }
}
