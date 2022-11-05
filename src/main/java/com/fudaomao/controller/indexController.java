package com.fudaomao.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
public class indexController {
    @RequestMapping("index")
    public String index(){
        return "detail.html";
    }

}
