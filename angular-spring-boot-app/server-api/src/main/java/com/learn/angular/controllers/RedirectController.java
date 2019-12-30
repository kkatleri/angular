package com.learn.angular.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class RedirectController {

    @RequestMapping("/home")
    public RedirectView initNgApp() {
        return new RedirectView("/");
    }
}
