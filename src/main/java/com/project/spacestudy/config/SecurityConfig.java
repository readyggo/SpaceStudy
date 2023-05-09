package com.project.spacestudy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity // 시큐리티 설정을 웹에 적용
public class SecurityConfig {

    // 시큐리티 기본 설정을 처리하는 빈
    @Bean
    public BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    // http basic 인증 문제 해결하기 위해 설정
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable() // csrf공격 방어토큰 자동 생성 해제
                .authorizeRequests() //권한요청 범위 설정
                .requestMatchers("/signUp/**")
                .permitAll() // /signUP으로 시작하는 요청은 따로 권한 검증하지 말아라
        ;
        return http.build();
    }
}