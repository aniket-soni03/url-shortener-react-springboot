package com.url_shortner.controller;

import com.url_shortner.service.RedirectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RedirectController {

    private final RedirectService service;

    public RedirectController(RedirectService service) {
        this.service = service;
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> redirect(@PathVariable String code) {
        String target = service.redirect(code);
        return ResponseEntity.status(302).header("Location", target).build();
    }
}
