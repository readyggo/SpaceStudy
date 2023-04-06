package com.project.spacestudy.config;

import org.jasypt.encryption.StringEncryptor;
import org.jasypt.encryption.pbe.PooledPBEStringEncryptor;
import org.jasypt.encryption.pbe.config.SimpleStringPBEConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:jasypt.properties")
public class JasyptConfig {

    @Value("${jasypt.key}")
    private String key;

    @Bean("jasyptStringEncryptor")
    public StringEncryptor stringEncryptor() {

        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        config.setPassword(key); // 암호화 키
        config.setAlgorithm("PBEWITHHMACSHA512ANDAES_256"); // 암호화 알고리즘 (기본값)
        config.setKeyObtentionIterations("1000"); // 반복할 해싱 함수
        config.setPoolSize("1"); // 인스턴스 pool
        config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator"); // 랜덤 난수 생성
        config.setIvGeneratorClassName("org.jasypt.iv.RandomIvGenerator"); // 랜덤 난수 생성
        config.setStringOutputType("base64"); // 인코딩
        encryptor.setConfig(config);
        return encryptor;
    }

}
