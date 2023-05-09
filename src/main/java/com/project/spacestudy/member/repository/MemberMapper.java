package com.project.spacestudy.member.repository;

import com.project.spacestudy.member.DTO.MemberDTO;
import com.project.spacestudy.member.Domain.Member;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
        boolean register(Member member);
        int isValidEmail(String email);
        Member findUser(String email);

}
