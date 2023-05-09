package com.project.spacestudy.member.service;


import com.project.spacestudy.config.RecaptchaConfig;
import com.project.spacestudy.member.Domain.Member;
import com.project.spacestudy.member.repository.MemberMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;


@Log4j2
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberMapper memberMapper;
    private final BCryptPasswordEncoder encoder;
    private final RecaptchaConfig recaptchaConfig;

    public boolean isHuman(String token){
        try {
            log.info(" init isHuman ");
            return recaptchaConfig.verify(token);
        } catch (IOException e) {
            return false;
        }
    }
    public boolean register(Member member){
        log.info(" init register ");

        if(validateRegisterInfo(member))
        {
            member.setPassword(encoder.encode(member.getPassword()));
            return memberMapper.register(member);
        }

        return false;
    }

    public boolean isValidEmail(String email){
        System.out.println(email);
        return memberMapper.isValidEmail(email) == 0;
    }

    public boolean validateRegisterInfo(Member member)
    {
        log.info(" init validateRegisterInfo ");

        // email : co.kr 포함
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." +
                "[a-zA-Z0-9_+&*-]+)*@" +
                "(?:[a-zA-Z0-9-]+\\.)+(?:[a-zA-Z]{3}|co\\.kr)$";

        // password : 소문자 , 숫자 필수. 8 ~ 20자
        String passwordRegex = "^(?=.*[a-z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,20}$";

        return member.getEmail().matches(emailRegex) &&
                member.getPassword().matches(passwordRegex);
    }

    public Member findUser(String account){
        return null;
    }
}
