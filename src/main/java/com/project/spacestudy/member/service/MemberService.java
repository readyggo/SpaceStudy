package com.project.spacestudy.member.service;


import com.project.spacestudy.member.Domain.Member;
import com.project.spacestudy.member.repository.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberMapper memberMapper;
//    private final BCryptPasswordEncoder encoder;

    public boolean register(Member member){
        return false;
    }

    public boolean isDuplicate(String email){
        System.out.println(email);
        return memberMapper.isDuplicate(email) > 0;
    }

    public boolean checkRegisterInfo(Member member)
    {
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
