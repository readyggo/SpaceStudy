package com.project.spacestudy.member.Domain;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Getter @Setter @ToString
public class Member {

    private long memberId;
    private String email;
    private String password;
    private String registryDate;
    private String lastAccessedDate;
    private String profileFile;
    private int readerCnt;
    private int memberCnt;
    private boolean autoLogin;

    public Member(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
