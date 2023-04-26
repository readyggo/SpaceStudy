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
    @PostMapping("/signUp/check/email")
    public ResponseEntity CheckEmail(@RequestBody String email)
    {
        log.info( " CheckEmail init : {}" , email);
        return memberService.isDuplicate(email) ?
        ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }
    @PostMapping("/signUp/data")
    public ResponseEntity signUp(@RequestBody MemberDTO memberDTO){

        log.info(" init MemberController : signIn info - {} , {}",  memberDTO.getEmail() , memberDTO.getPassword() );

        Member member = new Member(memberDTO.getEmail(), memberDTO.getPassword());
        boolean isRegister = memberService.register(member);
        return ResponseEntity.status(HttpStatus.CREATED).body("{\"message\": \"Success\"}");
    }


}
