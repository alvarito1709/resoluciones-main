package com.resoluciones.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //Esta configuracion comentada es para windows
//       WebMvcConfigurer.super.addResourceHandlers(registry);
//       registry.addResourceHandler("/uploads/**").addResourceLocations("file:/C:/uploads/");
//Esta configuracion comentada es para linux
       WebMvcConfigurer.super.addResourceHandlers(registry);
        registry.addResourceHandler("/uploads/**").addResourceLocations("file:/home/educacionuser/Downloads/uploads/").setCachePeriod(0);

    }
}
