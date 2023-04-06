package com.project.spacestudy.config;


import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.sql.DataSource;

@Configuration
@PropertySource("classpath:dbInfo.properties")
public class DatabaseConfig {

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String userName;

    @Value("${spring.datasource.password}")
    private String password;

    @Bean
    public DataSource dataSource(){
        HikariConfig config = new HikariConfig();

        config.setJdbcUrl("jdbc:mariadb://localhost:3306/" + url );
        config.setDriverClassName("org.mariadb.jdbc.Driver");
        config.setUsername(userName);
        config.setPassword(password);

        return new HikariDataSource(config);
    }

}
