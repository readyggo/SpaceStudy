package com.project.spacestudy.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


// WebMvcConfigurer : Spring MVC의 기본 구성을 커스터마이징
// addCorsMappings : // CORS허용 처리

@Configuration
public class WebConfig implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 해당 경로 허용
                .allowedOriginPatterns("*") // 도메인 허용
                .allowedMethods("*") // HTTP 메서드 허용
                .allowedHeaders("*") // HTTP 헤더 허용
                .allowCredentials(true); // 쿠키 같은 인증정보 허용
    }
}
