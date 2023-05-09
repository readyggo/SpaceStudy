package com.project.spacestudy.member.controller;


import com.project.spacestudy.member.DTO.MemberDTO;
import com.project.spacestudy.member.Domain.Member;
import com.project.spacestudy.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
@RequiredArgsConstructor
public class MemberController {


    private final MemberService memberService;
    @PostMapping("/signUp/valid/email")
    public ResponseEntity<Boolean> isValidEmail(@RequestBody String email)
    {
        log.info( " init isValidEmail : {}" , email);
        boolean isValid = memberService.isValidEmail(email);
        System.out.println(isValid);
        return new ResponseEntity<>(isValid, HttpStatus.OK);
    }

    @PostMapping("/signUp/is/human")
    public ResponseEntity<Boolean> isHuman(@RequestBody String resp)
    {
        log.info(" init isHuman : {} ", resp);
        boolean isHuman = memberService.isHuman(resp);
        return new ResponseEntity<>(isHuman, HttpStatus.OK);
    }

    @PostMapping("/signUp/data")
    public ResponseEntity<Boolean> signUp(@RequestBody MemberDTO memberDTO) {

        log.info(" init signUp : signIn info - {} , {}", memberDTO.getEmail(), memberDTO.getPassword());
        Member member = new Member(memberDTO.getEmail(), memberDTO.getPassword());
        boolean isRegister = memberService.register(member);
        return new ResponseEntity<>(isRegister, HttpStatus.OK);
    }

}
