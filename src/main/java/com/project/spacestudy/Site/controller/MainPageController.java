package com.project.spacestudy.Site.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainPageController {
    @GetMapping("/main")
    public String app(){
        return "안녕하세요 ! ! ";
    }

}
